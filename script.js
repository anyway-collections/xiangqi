$(document).ready(function() {
    const board = [
        ['r', 'n', 'b', 'a', 'k', 'a', 'b', 'n', 'r'],
        ['', '', '', '', '', '', '', '', ''],
        ['', 'c', '', '', '', '', '', 'c', ''],
        ['p', '', 'p', '', 'p', '', 'p', '', 'p'],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['P', '', 'P', '', 'P', '', 'P', '', 'P'],
        ['', 'C', '', '', '', '', '', 'C', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['R', 'N', 'B', 'A', 'K', 'A', 'B', 'N', 'R']
    ];

    const pieceMap = {
        'r': '车', 'n': '马', 'b': '象', 'a': '士', 'k': '将', 'c': '炮', 'p': '卒',
        'R': '车', 'N': '马', 'B': '相', 'A': '仕', 'K': '帅', 'C': '炮', 'P': '兵'
    };

    const $chessboard = $('#chessboard');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 9; j++) {
            const $square = $('<div>').addClass('square').attr('data-row', i).attr('data-col', j).css({
                top: i * 60 + 'px',
                left: j * 60 + 'px'
            });
            if (board[i][j]) {
                const $piece = $('<div>').addClass('piece').addClass(board[i][j] === board[i][j].toUpperCase() ? 'red' : 'black').text(pieceMap[board[i][j]]).css({
                    top: i * 60 + 'px',
                    left: j * 60 + 'px'
                });
                $chessboard.append($piece);
            }
            $chessboard.append($square);
        }
    }

    let selectedPiece = null;
    $('.piece').on('click', function() {
        if (selectedPiece) {
            selectedPiece.removeClass('selected');
            selectedPiece = null;
        }
        $(this).addClass('selected');
        selectedPiece = $(this);
    });

    $('.square').on('click', function() {
        if (selectedPiece) {
            const $targetSquare = $(this);
            if (!$targetSquare.find('.piece').length) {
                selectedPiece.css({
                    top: $targetSquare.css('top'),
                    left: $targetSquare.css('left')
                });
                selectedPiece.removeClass('selected');
                selectedPiece = null;
            }
        }
    });
});