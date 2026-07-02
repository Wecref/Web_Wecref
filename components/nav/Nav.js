function ClickCss(target, targets) {
    targets.forEach(element => element.classList.remove('active'));
    target.classList.add('active');
}

function smoothScroll(targetY, duration) {
    var startY = window.pageYOffset;
    var diff = targetY - startY;
    var startTime = performance.now();

    function step(currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + diff * ease);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
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
                if (targetEl) {
                    var nav = document.querySelector('nav');
                    var navH = nav ? nav.offsetHeight : 0;
                    var rect = targetEl.getBoundingClientRect();
                    smoothScroll(window.pageYOffset + rect.top - navH, 500);
                }
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
            event.preventDefault();
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
