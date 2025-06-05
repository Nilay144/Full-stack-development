document.getElementById('plan-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const days = document.getElementById('days').value;

    const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination, days })
    });

    const data = await response.json();
    document.getElementById('result').textContent = data.plan;
});
