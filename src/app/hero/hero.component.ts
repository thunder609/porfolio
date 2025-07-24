import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typingText', { static: false }) typingTextRef!: ElementRef;

  texts = [
    'Desarrollador Full Stack',
    'Diseñador UX/UI',
    'Entusiasta de la Tecnología'
  ];
  currentText = '';
  typingSpeed = 80;
  erasingSpeed = 40;
  delayBetweenTexts = 1200;
  private charIndex = 0;
  private textIndex = 0;
  private isErasing = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.typeWriter();
  }

  typeWriter() {
    const fullText = this.texts[this.textIndex];
    if (!this.isErasing && this.charIndex < fullText.length) {
      this.currentText += fullText.charAt(this.charIndex);
      this.charIndex++;
      this.updateTypingText();
      setTimeout(() => this.typeWriter(), this.typingSpeed);
    } else if (this.isErasing && this.charIndex > 0) {
      this.currentText = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.updateTypingText();
      setTimeout(() => this.typeWriter(), this.erasingSpeed);
    } else {
      if (!this.isErasing) {
        this.isErasing = true;
        setTimeout(() => this.typeWriter(), this.delayBetweenTexts);
      } else {
        this.isErasing = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        setTimeout(() => this.typeWriter(), this.typingSpeed);
      }
    }
  }

  updateTypingText() {
    if (this.typingTextRef) {
      this.typingTextRef.nativeElement.textContent = this.currentText;
      this.cdr.detectChanges();
    }
  }
}
