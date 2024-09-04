function anaume() {
    const text = document.getElementById('text').value;
    if(text !== '') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/anaume');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = () => {
            const anaume_element = document.getElementById("anaume_text");
            anaume_element.innerText = xhr.responseText;
        };

        xhr.send(`text=${encodeURIComponent(text)}`);
    }
    else {
        alert('文字を入力して下さい');
    }
}