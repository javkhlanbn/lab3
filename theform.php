<div style="padding: 10px;">
    <div id="messagebox"></div>
    <form method="post">
        Тэмдэглэлийн нэр<br />
        <input id="yourname" style="width: 150px; height: 16px;" type="text" value="" onkeypress="autocomplete(this.value, event)" /><br />
        Тэмдэглэл<br />
        <textarea style="height: 80px;"></textarea><br />
        <input type="button" value="Нэмэх" onclick="validateform (document.getElementById('yourname').value)" />
        <div align="right"><a href="javascript:closetask()">Хаах</a></div>
    </form></div>
