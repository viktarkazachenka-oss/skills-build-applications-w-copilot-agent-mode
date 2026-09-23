import mongoose from 'mongoose';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data');

  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'alex.runner',
        email: 'alex.runner@mergington.edu',
        displayName: 'Alex Rivera',
        grade: 11,
        totalPoints: 420,
      },
      {
        username: 'jamie.moves',
        email: 'jamie.moves@mergington.edu',
        displayName: 'Jamie Chen',
        grade: 10,
        totalPoints: 365,
      },
      {
        username: 'sam.strong',
        email: 'sam.strong@mergington.edu',
        displayName: 'Sam Williams',
        grade: 12,
        totalPoints: 310,
      },
      {
        username: 'taylor.trains',
        email: 'taylor.trains@mergington.edu',
        displayName: 'Taylor Brooks',
        grade: 9,
        totalPoints: 280,
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Peak Performers',
        color: '#0f766e',
        captain: users[0]._id,
        members: [users[0]._id, users[1]._id],
        totalPoints: 785,
      },
      {
        name: 'Trail Blazers',
        color: '#ea580c',
        captain: users[2]._id,
        members: [users[2]._id, users[3]._id],
        totalPoints: 590,
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        team: teams[0]._id,
        type: 'running',
        durationMinutes: 32,
        distanceMiles: 3.1,
        points: 120,
        completedAt: new Date('2026-09-20T16:30:00Z'),
      },
      {
        user: users[1]._id,
        team: teams[0]._id,
        type: 'cycling',
        durationMinutes: 45,
        distanceMiles: 8.4,
        points: 95,
        completedAt: new Date('2026-09-21T15:45:00Z'),
      },
      {
        user: users[2]._id,
        team: teams[1]._id,
        type: 'strength',
        durationMinutes: 38,
        points: 88,
        completedAt: new Date('2026-09-21T17:15:00Z'),
      },
      {
        user: users[3]._id,
        team: teams[1]._id,
        type: 'walking',
        durationMinutes: 50,
        distanceMiles: 2.6,
        points: 72,
        completedAt: new Date('2026-09-22T14:20:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[0]._id, team: teams[0]._id, points: 420, rank: 1, streakDays: 12 },
      { user: users[1]._id, team: teams[0]._id, points: 365, rank: 2, streakDays: 8 },
      { user: users[2]._id, team: teams[1]._id, points: 310, rank: 3, streakDays: 6 },
      { user: users[3]._id, team: teams[1]._id, points: 280, rank: 4, streakDays: 5 },
    ]);

    await Workout.insertMany([
      {
        title: 'After-School Endurance',
        category: 'cardio',
        difficulty: 'beginner',
        durationMinutes: 25,
        description: 'A steady run-walk session that builds aerobic confidence.',
        equipment: ['Running shoes'],
      },
      {
        title: 'Core and Stability Circuit',
        category: 'strength',
        difficulty: 'intermediate',
        durationMinutes: 30,
        description: 'A balanced circuit for core control, posture, and total-body strength.',
        equipment: ['Exercise mat', 'Resistance band'],
      },
      {
        title: 'Reset and Recover',
        category: 'mobility',
        difficulty: 'beginner',
        durationMinutes: 15,
        description: 'A guided mobility flow for recovery after class or practice.',
        equipment: ['Exercise mat'],
      },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

void seedDatabase();
