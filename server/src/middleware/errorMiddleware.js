// handles requests to routes that don't exist
export const notFound = (req, res, next) => {
    res.status(404);
    next(new Error(`Route not found: ${req.method} ${req.originalUrl}`));
};

// Handles all errors passed through the app
export const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode >= 400 ? res.statusCode : 500;
    let message = err.message;

    // Invalid MongoDB ObjectID, e.g. /api/expenses/123
    if(err.name === "CastError") {
        statusCode = 400;
        message = `Invalid ID: ${err.value}`;
    }

    // Mongoose schema validation failed
    if(err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((e) => e.message)
            .join(", ");
    }

    res.status(statusCode).json({ 
        message,
        ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
     });
};