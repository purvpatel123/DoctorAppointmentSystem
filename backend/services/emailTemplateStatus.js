const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { padding: 20px; max-width: 600px; margin: 0 auto; }
        .header { background-color: {{headerColor}}; color: white; padding: 10px; text-align: center; }
        .details { margin: 20px 0; }
        .status-badge {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 4px;
            background-color: {{statusColor}};
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Appointment {{status}}</h2>
        </div>
        <div class="details">
            <span class="status-badge">{{status}}</span>
            <h3>Appointment Details:</h3>
            <p><strong>Doctor:</strong> {{doctorName}}</p>
            <p><strong>Date:</strong> {{appointmentDate}}</p>
            <p><strong>Time:</strong> {{appointmentTime}}</p>
            <p><strong>Appointment ID:</strong> {{appointmentId}}</p>
        </div>
        <div class="footer">
            {{#if isConfirmed}}
            <p>Please keep this confirmation for your records.</p>
            <p>Please arrive 10 minutes before your scheduled time.</p>
            {{else}}
            <p>Your appointment has been cancelled. Please contact us if you need to reschedule.</p>
            {{/if}}
        </div>
    </div>
</body>
</html>
`;

module.exports = emailTemplate
