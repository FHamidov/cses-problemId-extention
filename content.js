if (window.location.href.includes('cses.fi/problemset')) {
    const problemLinks = document.querySelectorAll('a[href*="/problemset/task/"]');
    
    const solvedProblems = document.querySelectorAll('.task-score.icon.full');
    
    const statsDiv = document.createElement('div');
    statsDiv.style.margin = '10px 0';
    statsDiv.style.padding = '10px';
    statsDiv.style.backgroundColor = '#f0f0f0';
    statsDiv.style.borderRadius = '5px';
    statsDiv.style.fontWeight = 'bold';
    statsDiv.innerHTML = `Ümumi məsələ sayı: ${problemLinks.length}<br>Həll edilmiş məsələlər: ${solvedProblems.length} (${Math.round(solvedProblems.length/problemLinks.length*100)}%)`;
    
    const content = document.querySelector('.content');
    if (content) {
        content.insertBefore(statsDiv, content.firstChild);
    }
        
    problemLinks.forEach((link, index) => {
        const problemNumber = index + 1; 
        
        const span = document.createElement('span');
        span.textContent = `${problemNumber}. `;
        span.style.color = '#666';
        span.style.fontSize = '0.9em';
        span.style.fontWeight = 'bold';
        span.style.marginRight = '5px';
        link.parentNode.insertBefore(span, link);
    });
} 