import { HeroesComponent } from "../heroes/heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEORES;
    let mockHeroService;

    beforeEach(()=>{
        HEORES = [
            {id:1, name:'SpiderDude', strenght: 8},
            {id:2, name:'Wonderfful Woman', strenght:24 },
            {id:3, name:'SuperDude', strenght: 55}
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeo', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('remove',() => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEORES;

            component.delete(HEORES[2]);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero',() => {
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.heroes = HEORES;

            component.delete(HEORES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEORES[2]);
        })
    })
})