const { z } = require("zod");

const TaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  completed: z.boolean().default(false),
});

module.exports = TaskSchema;
