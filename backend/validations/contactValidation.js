const { z } = require('zod');


const contactSchema = z.object({
    name: z.string().nonempty("Name is required"),
    phone: z.number().min(1000000000, "Phone number must be 10 digits").max(9999999999, "Phone number must be 10 digits"),
    email: z.string().email("Invalid email address"),
    hobbies: z.string().optional()
});

module.exports = contactSchema;
