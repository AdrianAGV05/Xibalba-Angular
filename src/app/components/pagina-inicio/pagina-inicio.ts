
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicio.html',
  styleUrls: ['./pagina-inicio.css'],
})
export class PaginaInicio implements OnInit, OnDestroy {
  images: string[] = [
    '/img/captura.jpg',
    '/img/procesamiento.jpg',
    '/img/visualizacion.jpg',
    '/img/gestion.jpg',
  ];

  current = 0;
  private intervalId: any = null;
  autoplayDelay = 4000; // ms

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.current = index % this.images.length;
    this.startAutoplay();
  }

  /**
   * Angular-friendly replacement for the old showSlide(index) routine.
   * It normalizes the index and updates the current slide.
   */
  showSlide(index: number) {
    const totalSlides = this.images.length;
    if (index >= totalSlides) {
      this.current = 0;
    } else if (index < 0) {
      this.current = totalSlides - 1;
    } else {
      this.current = index;
    }
    // Reset autoplay when user interacts
    this.startAutoplay();
  }

  /**
   * Used by the template to set the transform style for the sliding effect.
   */
  getTransform(): string {
    const offset = -this.current * 100;
    return `translateX(${offset}%)`;
  }
}
