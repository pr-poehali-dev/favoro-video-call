import { useState, useEffect } from 'react';
import { store, Contact } from '@/lib/store';

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const updateContacts = () => {
      setContacts(store.getContacts());
    };

    updateContacts();
    const unsubscribe = store.subscribe(updateContacts);
    return unsubscribe;
  }, []);

  return {
    contacts,
    addContact: (contact: Omit<Contact, 'id'>) => store.addContact(contact),
    deleteContact: (id: string) => store.deleteContact(id),
    updateContact: (id: string, updates: Partial<Contact>) => store.updateContact(id, updates),
  };
}
