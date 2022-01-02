function toast({
    title = '',
    message = '',
    type = 'info',
    duration,
}) {
    const main = document.getElementById('toast');

    if (main) {
        const toast2 = document.createElement('div');
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        }
        //auto remove toast
        const autoRemoveToast = setTimeout(function() {
            main.removeChild(toast2)
        }, duration + 1500)

        //Remove toast manually
        toast2.onclick=function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast2)
                clearTimeout(autoRemoveToast)
            }
        }

        const delay = (duration/1000).toFixed(2);
        toast2.classList.add('toast', `toast__${type}`);
        toast2.style.animation=`slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards;`
        const icon = icons[type];
        toast2.innerHTML=`
            <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="toast__body">
                <h2 class="toast__title">${title}</h2>
                <div class="toast__msg">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast2)
    }
}

function showSuccessToast() {
    toast({
    title: 'Thành Công',
    message: 'Bạn đã thành công',
    type: 'success',
    duration: 3000,
    });
}

function showErrorToast() {
    toast({
    title: 'Thất Bại',
    message: 'Có lỗi đã xảy ra.',
    type: 'error',
    duration: 3000,
    });
}