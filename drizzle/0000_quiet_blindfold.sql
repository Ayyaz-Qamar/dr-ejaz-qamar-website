CREATE TABLE "appointments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phone" text NOT NULL,
	"email" text NOT NULL,
	"date" text NOT NULL,
	"reason" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" text NOT NULL
);
