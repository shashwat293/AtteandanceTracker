document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const attendanceForm = document.getElementById('attendance-form');
    const leaveForm = document.getElementById('leave-form');
    const overtimeForm = document.getElementById('overtime-form');
    const shiftForm = document.getElementById('shift-form');

    // Dummy data for each section
    const dummyAttendance = [
        { name: 'John Doe', time: '2024-06-21 09:00 AM' },
        { name: 'Jane Smith', time: '2024-06-21 09:15 AM' },
        { name: 'Alice Johnson', time: '2024-06-21 09:30 AM' },
        { name: 'Bob Brown', time: '2024-06-21 09:45 AM' },
        { name: 'Charlie Davis', time: '2024-06-21 10:00 AM' },
        { name: 'Diana Evans', time: '2024-06-21 10:15 AM' },
        { name: 'Frank Green', time: '2024-06-21 10:30 AM' },
        { name: 'Grace Hall', time: '2024-06-21 10:45 AM' },
        { name: 'Henry Ivy', time: '2024-06-21 11:00 AM' },
        { name: 'Irene Jacobs', time: '2024-06-21 11:15 AM' }
    ];

    const dummyLeaveRequests = [
        { name: 'John Doe', type: 'Sick Leave' },
        { name: 'Jane Smith', type: 'Vacation Leave' },
        { name: 'Alice Johnson', type: 'Sick Leave' },
        { name: 'Bob Brown', type: 'Vacation Leave' },
        { name: 'Charlie Davis', type: 'Sick Leave' },
        { name: 'Diana Evans', type: 'Vacation Leave' },
        { name: 'Frank Green', type: 'Sick Leave' },
        { name: 'Grace Hall', type: 'Vacation Leave' },
        { name: 'Henry Ivy', type: 'Sick Leave' },
        { name: 'Irene Jacobs', type: 'Vacation Leave' }
    ];

    const dummyOvertime = [
        { name: 'John Doe', hours: 2 },
        { name: 'Jane Smith', hours: 3 },
        { name: 'Alice Johnson', hours: 1 },
        { name: 'Bob Brown', hours: 4 },
        { name: 'Charlie Davis', hours: 2 },
        { name: 'Diana Evans', hours: 3 },
        { name: 'Frank Green', hours: 1 },
        { name: 'Grace Hall', hours: 4 },
        { name: 'Henry Ivy', hours: 2 },
        { name: 'Irene Jacobs', hours: 3 }
    ];

    const dummyShifts = [
        { name: 'John Doe', time: '2024-06-21T09:00' },
        { name: 'Jane Smith', time: '2024-06-21T10:00' },
        { name: 'Alice Johnson', time: '2024-06-21T11:00' },
        { name: 'Bob Brown', time: '2024-06-21T12:00' },
        { name: 'Charlie Davis', time: '2024-06-21T13:00' },
        { name: 'Diana Evans', time: '2024-06-21T14:00' },
        { name: 'Frank Green', time: '2024-06-21T15:00' },
        { name: 'Grace Hall', time: '2024-06-21T16:00' },
        { name: 'Henry Ivy', time: '2024-06-21T17:00' },
        { name: 'Irene Jacobs', time: '2024-06-21T18:00' }
    ];

    // Populate dummy attendance entries
    if (attendanceForm) {
        const list = document.getElementById('attendance-list');
        dummyAttendance.forEach(entry => {
            const item = document.createElement('li');
            item.textContent = `${entry.name} checked in at ${entry.time}`;
            list.appendChild(item);
        });
    }

    // Populate dummy leave requests
    if (leaveForm) {
        const list = document.getElementById('leave-requests');
        dummyLeaveRequests.forEach(request => {
            const item = document.createElement('li');
            item.textContent = `${request.name} requested ${request.type}`;
            list.appendChild(item);
        });
    }

    // Populate dummy overtime entries
    if (overtimeForm) {
        const list = document.getElementById('overtime-list');
        dummyOvertime.forEach(entry => {
            const item = document.createElement('li');
            item.textContent = `${entry.name} logged ${entry.hours} overtime hours`;
            list.appendChild(item);
        });
    }

    // Populate dummy shift schedules
    if (shiftForm) {
        const list = document.getElementById('shift-list');
        dummyShifts.forEach(shift => {
            const item = document.createElement('li');
            const shiftTime = new Date(shift.time).toLocaleString();
            item.textContent = `${shift.name} scheduled for shift at ${shiftTime}`;
            list.appendChild(item);
        });
    }

    // Populate dummy reports
    const reportContainer = document.getElementById('report-container');
    if (reportContainer) {
        dummyAttendance.forEach(entry => {
            const item = document.createElement('div');
            item.textContent = `${entry.name}: ${entry.time}`;
            reportContainer.appendChild(item);
        });

        dummyLeaveRequests.forEach(request => {
            const item = document.createElement('div');
            item.textContent = `${request.name} requested ${request.type}`;
            reportContainer.appendChild(item);
        });

        dummyOvertime.forEach(entry => {
            const item = document.createElement('div');
            item.textContent = `${entry.name} logged ${entry.hours} overtime hours`;
            reportContainer.appendChild(item);
        });

        dummyShifts.forEach(shift => {
            const item = document.createElement('div');
            const shiftTime = new Date(shift.time).toLocaleString();
            item.textContent = `${shift.name} scheduled for shift at ${shiftTime}`;
            reportContainer.appendChild(item);
        });
    }

    // Event listeners for form submissions (kept for future use)
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add login functionality here
            alert('Login submitted!');
        });
    }

    if (attendanceForm) {
        attendanceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('employee-name').value;
            const list = document.getElementById('attendance-list');
            const item = document.createElement('li');
            const checkInTime = new Date().toLocaleString();
            item.textContent = `${name} checked in at ${checkInTime}`;
            list.appendChild(item);
            alert('Attendance submitted!');
        });
    }

    if (leaveForm) {
        leaveForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('employee-name-leave').value;
            const type = document.getElementById('leave-type').value;
            const list = document.getElementById('leave-requests');
            const item = document.createElement('li');
            item.textContent = `Leave request from ${name} for ${type}`;
            list.appendChild(item);
            alert('Leave request submitted!');
        });
    }

    if (overtimeForm) {
        overtimeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('employee-name-overtime').value;
            const hours = document.getElementById('overtime-hours').value;
            const list = document.getElementById('overtime-list');
            const item = document.createElement('li');
            item.textContent = `Overtime logged: ${name} - ${hours} hours`;
            list.appendChild(item);
            alert('Overtime submitted!');
        });
    }

    if (shiftForm) {
        shiftForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('employee-name-shift').value;
            const time = document.getElementById('shift-time').value;
            const list = document.getElementById('shift-list');
            const item = document.createElement('li');
            const shiftTime = new Date(time).toLocaleString();
            item.textContent = `Shift scheduled for ${name} at ${shiftTime}`;
            list.appendChild(item);
            alert('Shift scheduled!');
        });
    }
});
