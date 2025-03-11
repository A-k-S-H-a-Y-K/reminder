interface Reminder {
    id: string;
    message: string;
    date: Date;
  }
  
  class ReminderDatabase {
    private reminders: Reminder[] = [];
  
    createReminder(id: string, message: string, date: Date): void {
      if (this.exists(id)) {
        throw new Error(`Reminder with ID ${id} already exists.`);
      }
      const newReminder: Reminder = { id, message, date };
      this.reminders.push(newReminder);
    }
  
    exists(id: string): boolean {
      return this.reminders.some(reminder => reminder.id === id);
    }
  
    getAllReminders(): Reminder[] {
      return this.reminders;
    }
  
    getReminder(id: string): Reminder | null {
      const reminder = this.reminders.find(reminder => reminder.id === id);
      return reminder || null;
    }
  
    removeReminder(id: string): void {
      const index = this.reminders.findIndex(reminder => reminder.id === id);
      if (index === -1) {
        throw new Error(`Reminder with ID ${id} not found.`);
      }
      this.reminders.splice(index, 1);
    }
  
    // Update a reminder by ID
    updateReminder(id: string, message: string, date: Date): void {
      const reminder = this.getReminder(id);
      if (!reminder) {
        throw new Error(`Reminder with ID ${id} not found.`);
      }
      reminder.message = message;
      reminder.date = date;
    }
  }
  
  export { ReminderDatabase };
  