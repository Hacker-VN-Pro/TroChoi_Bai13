// =====================================================
// TRÒ CHƠI SINH HỌC – BÀI 13
// JAVASCRIPT
// =====================================================


// =====================================================
// DỮ LIỆU 4 TRÒ CHƠI
// =====================================================

const games = {

    1: {
        name: "🧩 GIẢI CỨU SƠ ĐỒ",
        description: "Sắp xếp và kết nối kiến thức"
    },

    2: {
        name: "🔎 BẮT LỖI SINH HỌC",
        description: "Tìm và sửa lỗi kiến thức"
    },

    3: {
        name: "🔐 GIẢI MÃ BÍ MẬT",
        description: "Giải câu hỏi để tìm từ khoá"
    },

    4: {
        name: "🧠 NHIỆM VỤ SINH HỌC",
        description: "Vận dụng kiến thức vào tình huống"
    }

};


// =====================================================
// TRẠNG THÁI
// =====================================================

// Trò nào đã chơi?
let playedGames = {

    1: false,
    2: false,
    3: false,
    4: false

};


// Điểm từng nhóm

let scores = {

    1: 0,
    2: 0,
    3: 0,
    4: 0

};


// Nhóm nào đã chơi?

let groupPlayed = {

    1: false,
    2: false,
    3: false,
    4: false

};


// Trò đang chọn

let selectedGame = null;


// =====================================================
// LẤY ICON GAME
// =====================================================

function getGameIcon(gameNumber) {

    if (gameNumber === 1) {
        return "🧩";
    }

    if (gameNumber === 2) {
        return "🔎";
    }

    if (gameNumber === 3) {
        return "🔐";
    }

    return "🧠";
}


// =====================================================
// CHỌN TRÒ CHƠI
// =====================================================

function selectGame(gameNumber) {

    // Nếu trò đã chơi
    if (playedGames[gameNumber]) {
        return;
    }


    selectedGame = gameNumber;

    const game = games[gameNumber];

    const gameArea =
        document.getElementById("game-area");


    // -------------------------------------------------
    // ẨN MÀN HÌNH BẢN ĐỒ
    // -------------------------------------------------

    document.querySelector(".score-board").style.display = "none";

    document.querySelector(".container > h1").style.display = "none";

    document.querySelector(".subtitle").style.display = "none";

    document.querySelector(".container > h2").style.display = "none";

    document.querySelector(".map-description").style.display = "none";

    document.querySelector(".game-map").style.display = "none";


    // -------------------------------------------------
    // HIỂN THỊ MÀN HÌNH GAME
    // -------------------------------------------------

    gameArea.style.display = "block";

    gameArea.innerHTML = `

        <div class="game-screen">

            <div class="big-game-icon">
                ${getGameIcon(gameNumber)}
            </div>


            <h1 style="display:block;">
                ${game.name}
            </h1>


            <p class="game-subtitle">
                ${game.description}
            </p>


            <div class="divider"></div>


            <h2 style="display:block;">
                👥 NHÓM NÀO ĐANG THỰC HIỆN THỬ THÁCH?
            </h2>


            <p class="choose-text">
                Hãy chọn nhóm đang chơi.
            </p>


            <div class="group-selection">

                <button onclick="chooseGroup(1)">
                    🟢 NHÓM 1
                </button>

                <button onclick="chooseGroup(2)">
                    🔵 NHÓM 2
                </button>

                <button onclick="chooseGroup(3)">
                    🟠 NHÓM 3
                </button>

                <button onclick="chooseGroup(4)">
                    🟣 NHÓM 4
                </button>

            </div>


            <button
                class="back-button"
                onclick="backToMap()">

                ↩ QUAY LẠI BẢN ĐỒ

            </button>

        </div>

    `;
}


// =====================================================
// CHỌN NHÓM
// =====================================================

function chooseGroup(groupNumber) {


    // Nếu nhóm đã chơi
    if (groupPlayed[groupNumber]) {

        alert(
            "Nhóm này đã hoàn thành một thử thách rồi!"
        );

        return;
    }


    const game = games[selectedGame];

    const gameArea =
        document.getElementById("game-area");


    gameArea.innerHTML = `

        <div class="game-screen">

            <div class="big-game-icon">
                ${getGameIcon(selectedGame)}
            </div>


            <h1 style="display:block;">
                ${game.name}
            </h1>


            <p class="game-subtitle">
                ${game.description}
            </p>


            <div class="divider"></div>


            <h2 style="display:block;">
                👥 NHÓM ${groupNumber}
            </h2>


            <p class="choose-text">
                Nhóm ${groupNumber} đã được chọn.
            </p>


            <p class="choose-text">
                Chuẩn bị sẵn sàng cho thử thách!
            </p>


            <br>


            <button
                class="start-button"
                onclick="showInstructions(
                    ${selectedGame},
                    ${groupNumber}
                )">

                ▶ XEM HƯỚNG DẪN

            </button>


            <br>


            <button
                class="back-button"
                onclick="backToMap()">

                ↩ QUAY LẠI

            </button>

        </div>

    `;
}


// =====================================================
// HƯỚNG DẪN TẠM THỜI
// =====================================================

function showInstructions(
    gameNumber,
    groupNumber
) {

    const game = games[gameNumber];

    const gameArea =
        document.getElementById("game-area");


    let instruction = "";


    if (gameNumber === 1) {

        instruction =
            "Nhóm sẽ thực hiện các nhiệm vụ sắp xếp và kết nối kiến thức về chuyển hoá vật chất và năng lượng.";

    }


    if (gameNumber === 2) {

        instruction =
            "Nhóm sẽ tìm những lỗi sai trong các phát biểu Sinh học và sửa lại cho chính xác.";

    }


    if (gameNumber === 3) {

        instruction =
            "Nhóm sẽ giải các câu hỏi để tìm ra những từ khoá và cuối cùng giải mã từ khoá bí mật.";

    }


    if (gameNumber === 4) {

        instruction =
            "Nhóm sẽ vận dụng kiến thức về chuyển hoá vật chất và năng lượng để hoàn thành các nhiệm vụ Sinh học.";

    }


    gameArea.innerHTML = `

        <div class="game-screen">

            <div class="big-game-icon">
                ${getGameIcon(gameNumber)}
            </div>


            <h1 style="display:block;">
                HƯỚNG DẪN
            </h1>


            <p class="game-subtitle">
                ${game.name} – Nhóm ${groupNumber}
            </p>


            <div class="divider"></div>


            <p class="choose-text"
               style="
                   max-width:750px;
                   font-size:20px;
                   line-height:1.7;
               ">

                ${instruction}

            </p>


            <p class="choose-text">

                ⏱️ Thời gian sẽ chỉ bắt đầu
                sau khi nhấn BẮT ĐẦU.

            </p>


            <br>


            <button
                class="start-button"
                onclick="startGame(
                    ${gameNumber},
                    ${groupNumber}
                )">

                ▶ BẮT ĐẦU

            </button>


            <br>


            <button
                class="back-button"
                onclick="backToMap()">

                ↩ QUAY LẠI BẢN ĐỒ

            </button>

        </div>

    `;
}


// =====================================================
// BẮT ĐẦU GAME
// =====================================================

function startGame(
    gameNumber,
    groupNumber
) {

    const gameArea =
        document.getElementById("game-area");


    gameArea.innerHTML = `

        <div class="game-screen">

            <div class="big-game-icon">
                ${getGameIcon(gameNumber)}
            </div>


            <h1 style="display:block;">
                ${games[gameNumber].name}
            </h1>


            <p class="game-subtitle">

                🎮 Nhóm ${groupNumber} đã bắt đầu!

            </p>


            <div class="divider"></div>


            <p
                class="choose-text"
                style="font-size:24px;">

                🚧 Nội dung thử thách đang được xây dựng...

            </p>


            <button
                class="back-button"
                onclick="backToMap()">

                ↩ QUAY LẠI BẢN ĐỒ

            </button>

        </div>

    `;
}


// =====================================================
// QUAY LẠI BẢN ĐỒ
// =====================================================

function backToMap() {


    const gameArea =
        document.getElementById("game-area");


    // -------------------------------------------------
    // HIỆN LẠI MÀN HÌNH CHÍNH
    // -------------------------------------------------

    document.querySelector(".score-board").style.display = "";

    document.querySelector(".container > h1").style.display = "";

    document.querySelector(".subtitle").style.display = "";

    document.querySelector(".container > h2").style.display = "";

    document.querySelector(".map-description").style.display = "";

    document.querySelector(".game-map").style.display = "";


    // -------------------------------------------------
    // RESET KHU VỰC GAME
    // -------------------------------------------------

    gameArea.style.display = "";

    gameArea.style.minHeight = "";

    gameArea.style.width = "";

    gameArea.style.maxWidth = "";

    gameArea.style.margin = "";


    gameArea.innerHTML = `

        <p>
            👆 Hãy chọn một thử thách để bắt đầu!
        </p>

    `;


    // Xoá lựa chọn hiện tại

    selectedGame = null;
}