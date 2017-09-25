$().ready(function() {
    // validate the form when it is submitted
    $("#contactForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: {
                required: "Please enter your message",
                minlength: "Your message must be at least 10 characters long"
            }
        }
    });
});