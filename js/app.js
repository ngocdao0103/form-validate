let info;
function save() {
    info = document.getElementById('frm').elements;
    const user = Object({
        username: info['username'].value,
        gender: info['gender'].value,
        nationality: info['nationality'].value,
        cmnd_cccd: info['cmnd_cccd'].value,
        phone: info['phone'].value,
        email: info['email'].value,
        avatar: info['avatar'].value,
        note: info['note'].value
    });
    checkValidate(user);
}

function checkValidate(user) {
    if (user.username === '') {
        document.getElementById('username').classList.add('input_border_required');
        document.getElementById('username-required').style.display = 'block';
    } else {
        document.getElementById('username').classList.remove('input_border_required');
        document.getElementById('username-required').style.display = 'none';
    }
    if (user.gender === '') {
        document.getElementById('gender-required').style.display = 'block';
    }
    if (user.nationality === '') {
        document.getElementById('nationality').classList.add('input_border_required');
        document.getElementById('nationality-required').style.display = 'block';
    }
    if (user.cmnd_cccd === '') {
        document.getElementById('cmnd_cccd').classList.add('input_border_required');
        document.getElementById('cmnd_cccd-required').style.display = 'block';
    }
    if (user.phone === '') {
        document.getElementById('phone').classList.add('input_border_required');
        document.getElementById('phone-required').style.display = 'block';
    }
    if (user.email === '') {
        document.getElementById('email').classList.add('input_border_required');
        document.getElementById('email-required').style.display = 'block';
    }
    if (user.avatar === '') {
        document.getElementById('avatar').classList.add('input_border_required');
        document.getElementById('avatar-required').style.display = 'block';
    }
    if (user.note === '') {
        document.getElementById('note').classList.add('input_border_required');
        document.getElementById('note-required').style.display = 'block';
    }
}

function isPhone() {
    let phone = document.getElementById('phone').value;
    let isPhone = /(03|05|07|08|09)+([0-9]{8})\b/.test(phone);
    if(!isPhone) {
        document.getElementById('phone').classList.add('input_border_required');
        document.getElementById('phone-pattern').style.display = 'block';
    } else {
        document.getElementById('phone').classList.remove('input_border_required');
        document.getElementById('phone-pattern').style.display = 'none';
    }
    return isPhone;
}

function isEmail() {
    let email = document.getElementById('email').value;
    let isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if(!isEmail) {
        document.getElementById('email').classList.add('input_border_required');
        document.getElementById('email-pattern').style.display = 'block';
    } else {
        document.getElementById('email').classList.remove('input_border_required');
        document.getElementById('email-pattern').style.display = 'none';
    }
    return isEmail;
}

function isMinLenght() {
    let note = document.getElementById('note').value;
    if(note.length<10) {
        document.getElementById('note').classList.add('input_border_required');
        document.getElementById('note-minlenght').style.display = 'block';
        return false;
    } else {
        document.getElementById('note').classList.remove('input_border_required');
        document.getElementById('note-minlenght').style.display = 'none';
        return true;
    }
}