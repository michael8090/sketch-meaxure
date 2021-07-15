import { state } from "../../common";
import { localize, project } from "../../common";
import { SMColor } from "../../../src/meaxure/interfaces";
export function colorTokenItem(color: SMColor): string {
    var colorName = (project.colorNames) ? project.colorNames[color['argb-hex']] : '';
    
    return [
        '<div class="color"' + colorName + '>',
        '<textarea rows="2" readonly="readonly" class="color-name">' +  colorName + '</textarea>',
        '</div>'
    ].join('');
}
export function propertyType(title: string, content: string, isCode?: boolean) {
    var nopadding = isCode ? ' style="padding:0"' : '';
    return ['<section>',
        '<h3>' + localize(title) + '</h3>',
        '<div class="context"' + nopadding + '>',
        content,
        '</div>',
        '</section>'
    ].join('');
}
