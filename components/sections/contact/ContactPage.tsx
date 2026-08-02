import { Container } from "@/components/layout/Container";

import { ContactHero } from "./ContactHero";
import { ContactMethods } from "./ContactMethods";
import { ContactForm } from "./ContactForm";
import { ContactFAQ } from "./ContactFAQ";
import { ContactCTA } from "./ContactCTA";

export function ContactPage() {
  return (
    <main className="py-20 lg:py-24">
      <Container>
        <div className="space-y-24">
          {/* Hero */}
          <ContactHero />

          {/* Contact Options */}
          <ContactMethods />

          {/* Contact Form */}
          <ContactForm />

          {/* Frequently Asked Questions */}
          <ContactFAQ />

          {/* Call To Action */}
          <ContactCTA />
        </div>
      </Container>
    </main>
  );
}