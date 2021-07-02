const shareButtons = document.getElementsByClassName('article-share-button');

for (let i = 0; i < shareButtons.length; i++)
    shareButtons[i].addEventListener('click', () => handleShare(shareButtons[i]));

function handleShare(element) {
    const article = element.parentElement.parentElement.parentElement;

    const shareSections = article.getElementsByClassName('article-share');
    for (let i = 0; i < shareSections.length; i++)
        shareSections[i].classList.toggle('active');

    for (let i = 0; i < shareButtons.length; i++)
        shareButtons[i].classList.toggle('active');    
}