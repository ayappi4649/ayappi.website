
// Function to create and animate the falling text
function createFallingIcon(iconSrc) {
    for (let i = 0; i < 50; i++) {  
        const iconElement = document.createElement('img');
        iconElement.src = iconSrc;
        iconElement.className = 'falling-icon'; // CSSクラスでアニメーションを制御
        iconElement.style.left = `${Math.random() * window.innerWidth}px`; 
        iconElement.style.top = `-${Math.random() * 100}px`; // 初期の垂直位置を画面外に設定
        iconElement.style.animationDuration = `${Math.random() * 3 + 3}s`; 
        iconElement.style.position = 'absolute';  
        iconElement.addEventListener('animationend', () => {
            iconElement.remove(); // アニメーション終了後に要素を削除
        });
        document.body.appendChild(iconElement); // アイコンを画面に追加
    }
}


document.getElementById('heart').addEventListener('click', function() {
    createFallingIcon('rest_image/heart_pixel.png');  
});
