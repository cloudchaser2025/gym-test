-- Create the survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id BIGSERIAL PRIMARY KEY,
  training_level TEXT,
  goals TEXT,
  frequency TEXT,
  training_type TEXT,
  current_member TEXT,
  gym_preferences TEXT[],
  location TEXT,
  interests TEXT[],
  membership TEXT,
  first_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security (RLS) - optional but recommended
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (you can modify this based on your needs)
CREATE POLICY "Allow survey submissions" ON survey_responses
  FOR INSERT WITH CHECK (true);

-- Create a policy to allow reading (for admin purposes)
CREATE POLICY "Allow reading survey responses" ON survey_responses
  FOR SELECT USING (true);
