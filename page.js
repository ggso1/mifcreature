function showContent(contentId) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => section.classList.remove('active'));  
    const content = document.getElementById(contentId);
    content.classList.add('active'); 
}
