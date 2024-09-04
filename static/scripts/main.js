function anaume() {
    const text = document.getElementById('text').value;
    const make_count = document.getElementById('make_count').value;
    if(text !== '') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/anaume');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const response_data = JSON.parse(xhr.responseText);
                //console.log(response_data);
                const result_element = document.getElementById('result');
                result_element.innerText = response_data.result;
            }
            else {
                const result_element = document.getElementById('result');
                result_element.innerHTML = '<span style="color: red;">エラーが起きました<br>エラー内容を確認するにはコンソールを表示して下さい</span>';
            }
        };

        xhr.send(`text=${encodeURIComponent(text)}&make_count=${make_count}`);
    }
    else {
        alert('文字を入力して下さい');
    }
}