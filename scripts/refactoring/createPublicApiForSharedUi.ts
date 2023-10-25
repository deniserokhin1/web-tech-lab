import { Project } from 'ts-morph'
import path from 'path'
const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const isAbsolute = (value: string) => {
    const layers = [
        '1_app',
        '2_pages',
        '3_widgets',
        '4_features',
        '5_entities',
        '6_shared',
    ]

    return layers.some((layer) => value.startsWith(layer))
}

const files = project.getSourceFiles()
const sharedUiDirectory = project.getDirectory(
    path.resolve(__dirname, '..', '..', 'src', '6_shared', 'ui'),
)
const componentsDirs = sharedUiDirectory?.getDescendantDirectories()

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`
    const indexFile = directory.getSourceFile(indexFilePath)

    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}'`
        const file = directory.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        })
        file.save()
    }
})

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue()
        const valueWithoutAlias = value.replace('@/', '')

        const segments = valueWithoutAlias.split('/')
        const isSharedLayer = segments?.[0] === '6_shared'
        const isUiSlice = segments?.[1] === 'ui'

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/')
            importDeclaration.setModuleSpecifier(`@/${result}`)
        }
    })
})

project.save()
