function showCategory(category) {
            const rows = document.querySelectorAll('table tr');
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const badge = row.querySelector('.muscle-badge');
                if (category === 'Tutti' || (badge && badge.textContent.trim().toLowerCase() === category.toLowerCase())) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
            
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.tab-btn[data-cat="${category}"]`).classList.add('active');
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').catch(err => {
                    console.log('SW registration error:', err);
                });
            });
        }
