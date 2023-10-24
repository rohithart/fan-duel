import { tampa } from './data/teams';
import { Player } from './models/Player';
import { TeamDepth } from './models/TeamDepth';

describe('Sample test', () => {
  let teamDepth: TeamDepth;
  let TomBrady: Player;
  let BlaineGabbert: Player;
  let KyleTrask: Player;
  let MikeEvans: Player;
  let JaelonDarden: Player;
  let ScottMiller: Player;

  beforeEach(() => {
    TomBrady = new Player('1', 12, 'Tom Brady', tampa);
    teamDepth = new TeamDepth('1', tampa);

    BlaineGabbert = new Player('2', 11, 'Blaine Gabbert', tampa);
    KyleTrask = new Player('3', 2, 'Kyle Trask', tampa);
    MikeEvans = new Player('4', 13, 'MikeEvans', tampa);
    JaelonDarden = new Player('5', 1, 'Jaelon Darden', tampa);
    ScottMiller = new Player('6', 10, 'Scott Miller', tampa);
  });

  it('should add player to depth chart', () => {
    teamDepth.addPlayerToDepthChart('QB', TomBrady, 1);
    teamDepth.addPlayerToDepthChart('QB', BlaineGabbert, 2);
    teamDepth.addPlayerToDepthChart('QB', KyleTrask, 3);

    teamDepth.addPlayerToDepthChart('LWR', MikeEvans, 1);
    teamDepth.addPlayerToDepthChart('LWR', JaelonDarden, 2);
    teamDepth.addPlayerToDepthChart('LWR', ScottMiller, 3);

    const backups1 = teamDepth.getBackups('QB', TomBrady);
    expect(backups1.length).toBe(2);
    expect(backups1[0]).toEqual(BlaineGabbert);
    expect(backups1[1]).toEqual(KyleTrask);

    const backups2 = teamDepth.getBackups('LWR', JaelonDarden);
    expect(backups2.length).toBe(1);
    expect(backups2[0]).toEqual(ScottMiller);

    const backups3 = teamDepth.getBackups('QB', MikeEvans);
    expect(backups3.length).toBe(0);

    const backups4 = teamDepth.getBackups('QB', BlaineGabbert);
    expect(backups4.length).toBe(1);
    expect(backups4[0]).toEqual(KyleTrask);

    const backups5 = teamDepth.getBackups('QB', KyleTrask);
    expect(backups5.length).toBe(0);

    const playersQB = teamDepth.depthChart.get('QB');
    expect(playersQB.length).toEqual(3);
    expect(playersQB[0]).toEqual(TomBrady);
    expect(playersQB[1]).toEqual(BlaineGabbert);
    expect(playersQB[2]).toEqual(KyleTrask);

    const playersLWR = teamDepth.depthChart.get('LWR');
    expect(playersLWR.length).toEqual(3);
    expect(playersLWR[0]).toEqual(MikeEvans);
    expect(playersLWR[1]).toEqual(JaelonDarden);
    expect(playersLWR[2]).toEqual(ScottMiller);

    const removedPlayer = teamDepth.removePlayerFromDepthChart('LWR', MikeEvans);
    expect(removedPlayer).toBe(MikeEvans);

    const playersQB2 = teamDepth.depthChart.get('QB');
    expect(playersQB2.length).toEqual(3);
    expect(playersQB2[0]).toEqual(TomBrady);
    expect(playersQB2[1]).toEqual(BlaineGabbert);
    expect(playersQB2[2]).toEqual(KyleTrask);

    const playersLWR2 = teamDepth.depthChart.get('LWR');
    expect(playersLWR2.length).toEqual(2);
    expect(playersLWR2[0]).toEqual(JaelonDarden);
    expect(playersLWR[1]).toEqual(ScottMiller);
  });
});
