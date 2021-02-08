function solvePuzzle(pieces) {

    let result = [pieces[0].id];

    const nextPuzzle = () => pieces.find(piece => {

        // последний добавленный пазл или первый в строке
        let lastPuzzle = findPuzzle(pieces, lastPuzzleId(result));

        // сторона добавленного пазла с которой сравниваем следующий пазл
        let side = result.length % 10 === 0 ? 'left' : 'bottom';

        if (piece.id !== lastPuzzleId(result)) {
            for (let key in piece.edges) {
                if (piece.edges[key] && piece.edges[key].edgeTypeId === lastPuzzle.edges[side].edgeTypeId) {
                    return true
                }
            }
        }
    });

    const addId = () => result.push(nextPuzzle().id);

    let i = 0;

    while (i < pieces.length - 1) {
        addId();
        i += 1;
    }

    return result;
}

// id куска пазла к которому крепим следующий
function lastPuzzleId(arr) {
    if (arr.length % 10 === 0)
        return arr[arr.length - 10];

    return arr[arr.length - 1];
}

function findPuzzle(array, searchId) {
    return array.find(item => item.id === searchId);
}

// Не удаляйте эту строку
window.solvePuzzle = solvePuzzle;

