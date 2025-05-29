import { Team } from '../classTeam.js';

test('check new Set', () => {
	let team = new Team();
	let result = {
		members: new Set()
	};
	expect(team).toEqual(result);
});

test('check Error in method add', () => {
	let name = 'лучник';
	let team = new Team();
	function testError() {
		team.add(name);
        team.add(name);
	}
	expect(() => testError()).toThrow();
});

test('check add in method add', () => {
	let name = 'лучник';
    let team = new Team();
	team.add(name);
    let result = ['лучник'];
	expect(team.toArray()).toEqual(result);
});

test('check addAll in addAll', () => {
    let team = new Team();
	team.addAll('мечник', 'маг', 'лучник');
    let result = ['мечник', 'маг', 'лучник'];
	expect(team.toArray()).toEqual(result);
});

test('check toArray in method toArray', () => {
	let team = new Team();
	let result = [];
	expect(team.toArray()).toEqual(result);
})