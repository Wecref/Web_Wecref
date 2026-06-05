function ClickCss(target, targets) {
    targets.forEach(element => element.classList.remove('active'));
    target.classList.add('active');
}

export function InitMenu(targets) {
    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault();
            ClickCss(event.currentTarget, targets);
            const href = event.currentTarget.getAttribute('href');
            if (!href) return;
            if (href.startsWith('#')) {
                const targetEl = document.querySelector(href);
                if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = href;
            }
        });
    });
    targets[0].classList.add('active');
}

export function InitLanguageMenu(targets) {
    console.log(targets);

    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault(); // 페이지가 새로 고침되지 않도록 기본 동작을 방지합니다.
            if (event.currentTarget.href) {
                window.location.replace(event.currentTarget.href);
            }
        });
    });
}

export function InitMenuIcon(icon, layout) {
    icon.addEventListener('click', () => {
        layout.classList.toggle('active');
    });
}
