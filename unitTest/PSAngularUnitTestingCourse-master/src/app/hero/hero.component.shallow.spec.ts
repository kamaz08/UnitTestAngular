import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
    let fixture : ComponentFixture<HeroComponent>;


    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
        //fixture.componentInstance(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'ziomek', strength: 100};

        expect(fixture.componentInstance.hero.name).toEqual('ziomek');
    });

    it('should have the correct hero in anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'ziomek', strength: 100};
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('ziomek');


        expect(fixture.nativeElement.querySelector('a').textContent).toContain('ziomek');
    })

})