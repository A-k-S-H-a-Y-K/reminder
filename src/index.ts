import { ReminderDatabase } from './reminderdatabase';

const reminderDb = new ReminderDatabase();


reminderDb.createReminder('1', 'Meeting with John', new Date('2025-03-12T10:00:00'));
reminderDb.createReminder('2', 'Doctor appointment', new Date('2025-03-13T14:30:00'));

console.log('All Reminders:', reminderDb.getAllReminders());

console.log('Reminder with ID 1:', reminderDb.getReminder('1'));

reminderDb.updateReminder('1', 'Meeting with John at the office', new Date('2025-03-12T11:00:00'));
console.log('Updated Reminder with ID 1:', reminderDb.getReminder('1'));

reminderDb.removeReminder('2');
console.log('All Reminders after removal:', reminderDb.getAllReminders());

console.log('Exists reminder with ID 2:', reminderDb.exists('2'));
