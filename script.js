//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('output');
    
    tbody.innerHTML = '<tr><td colspan="2" class="text-center">Loading...</td></tr>';
    
    const createPromise = (name) => {
        const delay = Math.random() * 2000 + 1000; // Random between 1000-3000ms
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve((delay / 1000).toFixed(3)); // Convert to seconds and format
            }, delay);
        });
    };
    
    const promises = [
        createPromise('Promise 1'),
        createPromise('Promise 2'),
        createPromise('Promise 3')
    ];
    
    const startTime = performance.now();
    
    Promise.all(promises).then((results) => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);
        
        tbody.innerHTML = `
            <tr><td>Promise 1</td><td>${results[0]}</td></tr>
            <tr><td>Promise 2</td><td>${results[1]}</td></tr>
            <tr><td>Promise 3</td><td>${results[2]}</td></tr>
            <tr><td>Total</td><td>${totalTime}</td></tr>
        `;
    });
});