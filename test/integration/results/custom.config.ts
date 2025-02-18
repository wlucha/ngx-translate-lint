import { ErrorFlow, ErrorTypes, ResultErrorModel } from "../../../src/core";
import { getAbsolutePath, languagesFolder, projectFolder } from '../utils';

const assertCustomConfig: ResultErrorModel[] = [
    // FEAT 97
    new ResultErrorModel(
        'CUSTOM.REGEXP.ONE',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'custom.keys.ts'),
        [
            'EN-us.json'
        ]
    ),
    // END FEAT 97
    new ResultErrorModel(
        'STRING.KEY_FROM_DIRECTIVE_VIEW.EXIST_IN_ONE_LOCALE',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'directive.keys.html'),
        [
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_DIRECTIVE_VIEW.ABSENT_IN_ALL_LOCALES',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'directive.keys.html'),
        [
           'EN-eu.json',
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_DIRECTIVE_INSIDE_TAG_VIEW.EXIST_IN_ONE_LOCALE',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'directive.keys.html'),
        [
           'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_DIRECTIVE_INSIDE_TAG_VIEW.EXIST_IN_ONE_LOCALE_BUG_86',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'directive.keys.html'),
        [
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'OBJECT.KEY_FROM_DIRECTIVE_INSIDE_TAG_VIEW.ABSENT_IN_ALL_LOCALES',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'directive.keys.html'),
        [
           'EN-eu.json',
           'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_ENUM.EXIST_IN_ONE_LOCALE',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'enum.keys.ts'),
        [
           'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_PIPE_VIEW.EXIST_IN_ONE_LOCALE',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_PIPE_VIEW.ABSENT_IN_ALL_LOCALES',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
           'EN-eu.json',
           'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'STRING.KEY_FROM_PIPE_VIEW.MISPRINT_IN_ONE_LOCALES',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-eu.json',
            'EN-us.json'
        ]
    ),
    // BUG92
    new ResultErrorModel(
        'BUG92',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-eu.json',
            'EN-us.json'
        ]
    ),
    // END BUG 92
    // BUG 61
    new ResultErrorModel(
        'carousel.details.title-new',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-eu.json',
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'creatorState.NEW',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-us.json',
        ]
    ),
    // END BUG 61
    // BUG 115
    new ResultErrorModel(
        'general.buttons.back',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-us.json'
        ]
    ),
    new ResultErrorModel(
        'general.buttons.back.PART-2',
        ErrorFlow.views, ErrorTypes.warning,
        getAbsolutePath(projectFolder, 'pipe.keys.html'),
        [
            'EN-us.json'
        ]
    ),
    // END BUG 115

    // FEAT 107
    new ResultErrorModel(
        'EMPTY.KEY',
        ErrorFlow.emptyKeys, ErrorTypes.warning,
        getAbsolutePath(languagesFolder, 'EN-eu.json')
    ),
    // END FEAT 107
];

export { assertCustomConfig };
