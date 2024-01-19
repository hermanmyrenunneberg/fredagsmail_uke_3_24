document.addEventListener('DOMContentLoaded', function () {
    const correctCombination = '042'; // Placeholder combination
    const form = document.getElementById('combination-form');
    const input = document.getElementById('combination-input');
    const eventsDiv = document.getElementById('events');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value === correctCombination) {
            // Fetch happenings in Oslo or display static content
            eventsDiv.innerHTML = '<p>Correct! Here are the happenings in Oslo this weekend:</p><ul><li>Event 1: Details</li><li>Event 2: Details</li><li>Event 3: Details</li></ul>';
        } else {
            eventsDiv.innerHTML = '<p>Incorrect combination. Please try again.</p>';
        }
    });
});
