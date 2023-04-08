let info;
let isCheck = true;
function save(){
    let user = document.getElementById('frm').elements;
    info = new Object({
        hoten: user['hoten'].value,
        gioitinh: user['gioitinh'].value,
        quoctich: user['quoctich'].value,
        cmnd: user['cmnd'].value,
        sdt: user['sdt'].value,
        email: user['email'].value,
        hinhanh: user['hinhanh'].value,
        ghichu: user['ghichu'].value
    });
    checkValite();
}

function checkValite() {
    if(info.hoten === '') {
        document.getElementById('hoten').classList.add('input_border_required');
        document.getElementById('hoten-span').style.display = 'block';
        isCheck = false;
    }

    return isCheck
}