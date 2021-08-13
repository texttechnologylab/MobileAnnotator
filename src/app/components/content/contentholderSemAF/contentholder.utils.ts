
interface FakeHTMLElement {
    offsetHeight: number;
    offsetLeft: number;
    offsetTop: number;
    offsetWidth: number;
}

// Copied from https://github.com/henlein/TextAnnotator/blob/main/WebApplication/app/view/tool/semaf/SemAFPanelController.js
export function getLinkPointsString(leftNode: HTMLElement | FakeHTMLElement,
    rightNode: HTMLElement | FakeHTMLElement,
    isReversed,
    level,
    indexFrom: number,
    indexTo: number,
    type,
    hStartOffsetDirection = 0,
    hEndOffsetDirection = 0) {

    if ((leftNode == null) && (rightNode == null)) return null


    const leftNodewasnull = leftNode == null
    const rightNodewasnull = rightNode == null

    const svg = document.querySelector("#mainContent > svg").clientWidth


    if (leftNode == null) {
        leftNode = { offsetHeight: 0, offsetLeft: 0, offsetTop: rightNode.offsetTop, offsetWidth: 0 } as FakeHTMLElement
        if(indexFrom>indexTo) {
            leftNode.offsetLeft = svg
        }
    }
    if (rightNode == null) {
        rightNode = { offsetHeight: 0, offsetLeft: svg, offsetTop: leftNode.offsetTop, offsetWidth: 0 } as FakeHTMLElement
        if(indexFrom>indexTo) rightNode.offsetLeft = 0
    }

    type xy = { [id: string]: number };

    let start: xy = {},
        end: xy = {},
        p0: xy = {},
        p1: xy = {},
        p2: xy = {},
        p3: xy = {},
        cp1: xy = {},
        cp2: xy = {},
        cp3: xy = {},
        cp4: xy = {};
    let nodeOffset = 2;
    let endOffset = 4;
    let leftNodeHOffset;
    let rightNodeHOffset;

    if (!isReversed) {
        leftNodeHOffset = hStartOffsetDirection * 7;
        rightNodeHOffset = hEndOffsetDirection * 7;
    } else {
        leftNodeHOffset = hEndOffsetDirection * 7;
        rightNodeHOffset = hStartOffsetDirection * 7;
    }

    start.x = ~~(leftNode.offsetLeft + leftNode.offsetWidth / 2) + leftNodeHOffset;
    end.x = ~~(rightNode.offsetLeft + rightNode.offsetWidth / 2) + rightNodeHOffset;

    if (rightNode.offsetTop > leftNode.offsetTop) {
        start.y = leftNode.offsetTop + leftNode.offsetHeight - nodeOffset;
        end.y = rightNode.offsetTop + nodeOffset;

        if (!isReversed) {
            end.y -= endOffset;
        } else
            start.y += endOffset;

        cp1.dx = 0;
        cp1.dy = 15;
        cp2.dx = 0;
        cp2.dy = 15;

        cp1.x = start.x + cp1.dx;
        cp1.y = start.y + cp1.dy;
        cp4.x = end.x - cp1.dx;
        cp4.y = end.y - cp1.dy;

        let dy = cp4.y - cp1.y;
        let dx = cp4.x - cp1.x;

        p1.dx = cp1.dx + 0.1 * dx;
        p1.dy = cp1.dy + 0.1 * dy;

        cp2.x = start.x + cp2.dx;
        cp2.y = start.y + cp2.dy;
        p1.x = start.x + p1.dx;
        p1.y = start.y + p1.dy;

        cp3.x = end.x - cp2.dx;
        cp3.y = end.y - cp2.dy;
        p2.x = end.x - p1.dx;
        p2.y = end.y - p1.dy;
    } else if (rightNode.offsetTop == leftNode.offsetTop) {
        start.y = leftNode.offsetTop + nodeOffset;
        if (leftNodewasnull) start.y = leftNode.offsetTop - 20
        end.y = rightNode.offsetTop + nodeOffset;

        cp1.dx = 0;
        cp1.dy = -20 * level;

        cp2.dx = 0;
        cp2.dy = cp1.dy;

        p1.dx = leftNode.offsetLeft != rightNode.offsetLeft ? 20 : 6;
        p1.dy = cp1.dy;

        cp1.x = start.x + cp1.dx;
        cp1.y = start.y + cp1.dy;
        cp2.x = start.x + cp2.dx;
        cp2.y = start.y + cp2.dy;
        p1.x = start.x + p1.dx;
        if(rightNodewasnull && (indexFrom>indexTo)) p1.x = start.x - p1.dx
        p1.y = start.y + p1.dy;

        p2.x = end.x - p1.dx;
        if(leftNodewasnull && (indexFrom>indexTo)){
            p2.x = end.x+p1.dx
        }
        p2.y = end.y + p1.dy;
        cp3.x = end.x;
        cp3.y = end.y + cp1.dy;
        cp4.x = end.x;
        cp4.y = end.y + cp1.dy;

        if (level > 1) {
            p0.x = cp1.x;
            p0.y = cp1.y + 20;
            p3.x = cp3.x;
            p3.y = cp3.y + 20;
        }

        if (!isReversed)
            end.y -= endOffset;
        else
            start.y -= endOffset;
    } else {
        start.y = leftNode.offsetTop + nodeOffset;
        end.y = rightNode.offsetTop + rightNode.offsetHeight - nodeOffset;

        if (!isReversed)
            end.y += endOffset;
        else
            start.y -= endOffset;

        cp1.dx = 0;
        cp1.dy = -15;
        cp2.dx = 0;
        cp2.dy = -15;

        cp1.x = start.x + cp1.dx;
        cp1.y = start.y + cp1.dy;
        cp4.x = end.x - cp1.dx;
        cp4.y = end.y - cp1.dy;

        let dy = cp4.y - cp1.y;
        let dx = cp4.x - cp1.x;

        p1.dx = cp1.dx + 0.1 * dx;
        p1.dy = cp1.dy + 0.1 * dy;

        cp2.x = start.x + cp2.dx;
        cp2.y = start.y + cp2.dy;
        p1.x = start.x + p1.dx;
        p1.y = start.y + p1.dy;

        cp3.x = end.x - cp2.dx;
        cp3.y = end.y - cp2.dy;
        p2.x = end.x - p1.dx;
        p2.y = end.y - p1.dy;
    }

    let points = { start, cp1, cp2, p1, p2, cp3, cp4, end };

    let pathStr;
    if (!p0.x) {
        pathStr =
            `M ${start.x}, ${start.y}
C ${cp1.x}, ${cp1.y}
${cp2.x}, ${cp2.y}
${p1.x}, ${p1.y}
L ${p2.x}, ${p2.y}
C ${cp3.x}, ${cp3.y}
${cp4.x}, ${cp4.y}
${end.x}, ${end.y}`;
    } else {
        pathStr =
            `M ${start.x}, ${start.y}
L ${p0.x}, ${p0.y}
C ${cp1.x}, ${cp1.y}
${cp2.x}, ${cp2.y}
${p1.x}, ${p1.y}
L ${p2.x}, ${p2.y}
C ${cp3.x}, ${cp3.y}
${cp4.x}, ${cp4.y}
${p3.x}, ${p3.y}
L ${end.x}, ${end.y}`;
    }

    if (leftNodewasnull) {
        pathStr =
            `M ${start.x}, ${p2.y}
L ${p2.x}, ${p2.y}
C ${cp3.x}, ${cp3.y}
${cp4.x}, ${cp4.y}
${end.x}, ${end.y}`;
    }

    if (rightNodewasnull) {
        pathStr =
            pathStr =
            `M ${start.x}, ${start.y}
C ${cp1.x}, ${cp1.y}
${cp2.x}, ${cp2.y}
${p1.x}, ${p1.y}
L ${end.x!=0 ? end.x - 3: 3}, ${p2.y}`;
    }

    return { pathStr, points };
}