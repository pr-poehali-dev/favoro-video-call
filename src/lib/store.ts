export interface Contact {
  id: string;
  name: string;
  email: string;
  status: 'online' | 'offline' | 'away';
  avatar?: string;
}

export interface Message {
  id: string;
  sender: 'me' | 'contact';
  text: string;
  timestamp: number;
}

class Store {
  private contacts: Contact[] = [];
  private listeners: Set<() => void> = new Set();

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  getContacts(): Contact[] {
    return [...this.contacts];
  }

  addContact(contact: Omit<Contact, 'id'>): void {
    const newContact: Contact = {
      ...contact,
      id: crypto.randomUUID(),
    };
    this.contacts.push(newContact);
    this.notify();
  }

  deleteContact(id: string): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.notify();
  }

  updateContact(id: string, updates: Partial<Contact>): void {
    this.contacts = this.contacts.map(c =>
      c.id === id ? { ...c, ...updates } : c
    );
    this.notify();
  }
}

export const store = new Store();
