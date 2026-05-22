window.addEventListener('message', function(event) {

    const data = event.data;

    if (data.action === 'show') {

        showTextUI(data);

    }

    if (data.action === 'hide') {

        hideTextUI();

    }

});

function showTextUI(data) {

    const container = document.getElementById('textui-container');

    updatePosition(data.position);

    container.innerHTML = `

        <div class="textui">

            <div class="key"
                 style="
                    background: ${data.color};
                 ">
                ${data.key}
            </div>

            <div class="label">

                ${data.icon
                    ? `<i class="${data.icon}"></i>`
                    : ''
                }

                ${data.text}

            </div>

        </div>
    `;
}

function hideTextUI() {

    const ui = document.querySelector('.textui');

    if (!ui) return;

    ui.classList.add('textui-out');

    setTimeout(() => {

        ui.remove();

    }, 200);

}

function updatePosition(position) {

    const container =
        document.getElementById('textui-container');

    container.style.top = '';
    container.style.bottom = '';
    container.style.left = '';
    container.style.right = '';
    container.style.transform = '';

    switch(position) {

        case 'top-center':

            container.style.top = '10%';

            container.style.left = '50%';

            container.style.transform =
                'translateX(-50%)';

        break;

        case 'left':

            container.style.left = '2%';

            container.style.top = '50%';

            container.style.transform =
                'translateY(-50%)';

        break;

        case 'right':

            container.style.right = '2%';

            container.style.top = '50%';

            container.style.transform =
                'translateY(-50%)';

        break;

        default:

            container.style.left = '50%';

            container.style.bottom = '10%';

            container.style.transform =
                'translateX(-50%)';

        break;
    }

}