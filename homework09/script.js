const staticBlocks = document.getElementById('static');
const dynamicBlocks = document.getElementById('dynamic');

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, 'a').toUpperCase();
}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const staticBlock = document.createElement('div');
        const dynamicBlock = document.createElement('div');
        staticBlock.style.backgroundColor = randomColor();
        dynamicBlock.style.backgroundColor = randomColor();
        staticBlocks.appendChild(staticBlock);
        dynamicBlocks.appendChild(dynamicBlock);
    }
}

function generateBlocksInterval() {
    setInterval(() => {
        dynamicBlocks.childNodes.forEach(block => {
            return block.style.backgroundColor = randomColor();
        });
    }, 1000)
}

generateBlocks();
generateBlocksInterval();