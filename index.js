function tinhLuong() {
    const luongMotNgay = document.getElementById('luongMotNgay').value;
    const soNgayLam = document.getElementById('soNgayLam').value;
    const luong = luongMotNgay * soNgayLam;
    document.getElementById('ketQua').innerText = `Lương của bạn là: ${luong} VND`;
}
function tinhTrungBinh() {
    const so1 = parseFloat(document.getElementById('so1').value);
    const so2 = parseFloat(document.getElementById('so2').value);
    const so3 = parseFloat(document.getElementById('so3').value);
    const so4 = parseFloat(document.getElementById('so4').value);
    const so5 = parseFloat(document.getElementById('so5').value);
    
    const tong = so1 + so2 + so3 + so4 + so5;
    const trungBinh = tong / 5;
    
    document.getElementById('ketQqua').innerText = `Giá trị trung bình là: ${trungBinh}`;
}
function quyDoi() {
    const tyGia = 23500;
    const usd = parseFloat(document.getElementById('usd').value);
    
    if (isNaN(usd) || usd <= 0) {
        document.getElementById('ketQua').innerText = "Vui lòng nhập số tiền USD hợp lệ.";
        return;
    }

    const vnd = usd * tyGia;
    document.getElementById('ketQqqua').innerText = `Số tiền sau quy đổi là: ${vnd.toLocaleString()} VND`;
}
function tinhToan() {
    const chieuDai = parseFloat(document.getElementById('chieuDai').value);
    const chieuRong = parseFloat(document.getElementById('chieuRong').value);

    if (isNaN(chieuDai) || chieuDai <= 0 || isNaN(chieuRong) || chieuRong <= 0) {
        document.getElementById('ketQua').innerText = "Vui lòng nhập chiều dài và chiều rộng hợp lệ.";
        return;
    }

    const dienTich = chieuDai * chieuRong;
    const chuVi = 2 * (chieuDai + chieuRong);

    document.getElementById('ketQqqqua').innerHTML = `Diện tích: ${dienTich} <br> Chu vi: ${chuVi}`;
}
function tinhTong() {
    const so = parseInt(document.getElementById('so2ChuSo').value);

    if (isNaN(so) || so < 10 || so > 99) {
        document.getElementById('ketQua').innerText = "Vui lòng nhập một số có 2 chữ số.";
        return;
    }

    const so_hang_dv = so % 10;
    const so_hang_chuc = Math.floor(so / 10);
    const tong = so_hang_dv + so_hang_chuc;

    document.getElementById('ketQqqqqua').innerText = `Tổng của 2 chữ số là: ${tong}`;
}