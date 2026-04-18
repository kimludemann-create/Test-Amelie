"use client";
import { useState } from "react";

const modules = [
  {
    id: "jorda", title: "Jorda", icon: "🌍", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50", border: "border-emerald-300", accent: "bg-emerald-500",
    terms: [
      { term: "Litosfære", def: "Den ytre, faste delen av jorda som inkluderer jordskorpen og øvre del av mantelen." },
      { term: "Tektoniske plater", def: "Store, bevegelige segmenter av jordskorpen som beveger seg over den plastiske astnosfæren." },
      { term: "Vulkan", def: "En åpning i jordskorpen der magma, gass og aske kan strømme ut." },
      { term: "Jordskjelv", def: "Vibrasjoner i jordskorpen forårsaket av plutselig bevegelse langs forkastningslinjer." },
      { term: "Bergartssyklus", def: "Den kontinuerlige prosessen der bergarter omdannes mellom magmatiske, sedimentære og metamorfe typer." },
      { term: "Erosjon", def: "Nedbrytning og transport av stein og jord av vann, vind eller is." },
    ],
    quiz: [
      { q: "Hva kalles den ytre, faste delen av jorda?", opts: ["Mantelen", "Litosfæren", "Kjernen", "Astnosfæren"], ans: 1 },
      { q: "Hvilken prosess skaper fjell?", opts: ["Erosjon", "Sedimentering", "Kollisjon mellom tektoniske plater", "Fordampning"], ans: 2 },
      { q: "Hva er magma?", opts: ["Fast stein i jordskorpen", "Smeltet stein under jordskorpen", "Gass fra vulkaner", "Grunnvann"], ans: 1 },
      { q: "Hvilket lag er jordens tykkeste?", opts: ["Jordskorpen", "Den ytre kjernen", "Mantelen", "Den indre kjernen"], ans: 2 },
      { q: "Hva forårsaker jordskjelv?", opts: ["Regn", "Bevegelse langs forkastningslinjer", "Vulkanutbrudd", "Havstrømmer"], ans: 1 },
    ],
    experiments: [
      { title: "Lag et vulkanutbrudd", desc: "Bland natron og eddik i en modell av vulkan laget av leire. Observer reaksjonen og diskuter hva som skjer i en ekte vulkan.", materials: ["Natron", "Eddik", "Leire eller pappmachè", "Matfarge (rød)"] },
      { title: "Erosjonsforsøk", desc: "Legg jord i en boks med helning. Hell vann over og observer hvordan erosjon skjer.", materials: ["Jord", "Vann", "Boks"] },
    ],
    tasks: [
      { q: "Forklar med egne ord hva tektoniske plater er og gi ett eksempel på hva som skjer når de møtes." },
      { q: "Hvilke tre typer bergarter finnes, og hvordan dannes de?" },
    ],
  },
  {
    id: "klima", title: "Klima og miljø", icon: "🌿", color: "from-green-500 to-lime-600", bg: "bg-green-50", border: "border-green-300", accent: "bg-green-500",
    terms: [
      { term: "Drivhuseffekt", def: "Prosessen der atmosfæriske gasser holder på varme fra sola og varmer opp jordoverflaten." },
      { term: "CO₂", def: "Karbondioksid – en viktig drivhusgass som frigjøres ved forbrenning av fossile brensler." },
      { term: "Bærekraftig utvikling", def: "Utvikling som møter dagens behov uten å ødelegge for fremtidige generasjoners muligheter." },
      { term: "Biologisk mangfold", def: "Variasjonen av liv på jorda, inkludert antall arter, genetisk variasjon og økosystemer." },
      { term: "Fotosyntese", def: "Prosessen der planter bruker sollys, CO₂ og vann for å produsere sukker og oksygen." },
      { term: "Næringskjede", def: "En rekke organismer der hver er mat for den neste, fra produsent til toppredator." },
    ],
    quiz: [
      { q: "Hva er den viktigste menneskeskapte drivhusgassen?", opts: ["Oksygen", "Nitrogen", "Karbondioksid (CO₂)", "Argon"], ans: 2 },
      { q: "Hva kalles prosessen der planter lager mat av sollys?", opts: ["Respirasjon", "Fotosyntese", "Fordampning", "Fermentering"], ans: 1 },
      { q: "Hva er biologisk mangfold?", opts: ["Antall mennesker på jorda", "Variasjonen av liv på jorda", "Klimaendringer", "Forurensning"], ans: 1 },
      { q: "Hvilket av disse er et fossilt brensel?", opts: ["Vindkraft", "Solenergi", "Kull", "Vannkraft"], ans: 2 },
      { q: "Hva betyr bærekraftig utvikling?", opts: ["Rask industriell vekst", "Møte dagens behov uten å ødelegge for fremtiden", "Bruke mest mulig ressurser", "Stoppe all utvikling"], ans: 1 },
    ],
    experiments: [
      { title: "Drivhuseffekten i en flaske", desc: "Bruk to plastflasker – én med vanlig luft og én med CO₂. Mål temperaturforskjellen under en lampe.", materials: ["2 plastflasker", "Termometer", "Natron", "Eddik", "Lampe"] },
      { title: "Vannkvalitetstest", desc: "Test pH-verdien i ulike vannkilder.", materials: ["pH-strips", "Vannprøver", "Notatbok"] },
    ],
    tasks: [
      { q: "Beskriv drivhuseffekten og forklar hvordan menneskelig aktivitet forsterker den." },
      { q: "Hva er forskjellen på klima og vær? Gi eksempler." },
    ],
  },
  {
    id: "kjemi", title: "Kjemi", icon: "⚗️", color: "from-purple-500 to-violet-600", bg: "bg-purple-50", border: "border-purple-300", accent: "bg-purple-500",
    terms: [
      { term: "Atom", def: "Den minste enheten av et grunnstoff som beholder grunnstoffets kjemiske egenskaper." },
      { term: "Molekyl", def: "To eller flere atomer bundet kjemisk sammen." },
      { term: "Kjemisk reaksjon", def: "En prosess der stoffer omdannes til nye stoffer med andre egenskaper." },
      { term: "Syre", def: "Et stoff som avgir hydrogenioner (H⁺) i vann. Har pH under 7." },
      { term: "Base", def: "Et stoff som tar opp hydrogenioner eller avgir hydroksidioner (OH⁻). Har pH over 7." },
      { term: "pH-skala", def: "En skala fra 0-14 som måler surhet/basiskhet. 7 er nøytralt." },
    ],
    quiz: [
      { q: "Hva er den minste enheten av et grunnstoff?", opts: ["Molekyl", "Celle", "Atom", "Ion"], ans: 2 },
      { q: "Hvilken pH har en syre?", opts: ["Over 7", "Nøyaktig 7", "Under 7", "Over 14"], ans: 2 },
      { q: "Hva skjer i en kjemisk reaksjon?", opts: ["Stoffene endrer farge", "Nye stoffer dannes", "Temperaturen stiger alltid", "Ingenting endres"], ans: 1 },
      { q: "Hva er formelen for vann?", opts: ["CO₂", "H₂O", "NaCl", "O₂"], ans: 1 },
      { q: "Hva er en nøytraliseringsreaksjon?", opts: ["Syre + syre", "Syre + base → salt + vann", "Base + base", "Metall + vann"], ans: 1 },
    ],
    experiments: [
      { title: "pH-test med kålsaft", desc: "Kok rødkål og bruk saften som pH-indikator. Test ulike stoffer og observer fargeendringer.", materials: ["Rødkål", "Vann", "Eddik", "Brus", "Såpevann"] },
      { title: "Kjemiske reaksjoner", desc: "Bland natron og eddik, observer gassutvikling.", materials: ["Natron", "Eddik", "Begerglass"] },
    ],
    tasks: [
      { q: "Hva er forskjellen mellom en fysisk og en kjemisk endring? Gi to eksempler på hver." },
      { q: "Forklar hva pH-skalaen forteller oss og gi eksempler på sure og basiske stoffer." },
    ],
  },
  {
    id: "teknologi", title: "Teknologi", icon: "🔧", color: "from-blue-500 to-cyan-600", bg: "bg-blue-50", border: "border-blue-300", accent: "bg-blue-500",
    terms: [
      { term: "Algoritme", def: "En trinnvis instruksjon for å løse et problem eller utføre en oppgave." },
      { term: "Bioteknologi", def: "Bruk av levende organismer eller biologiske prosesser til å lage produkter eller løse problemer." },
      { term: "Programmering", def: "Å skrive instruksjoner (kode) som en datamaskin kan forstå og utføre." },
      { term: "Bærekraftig teknologi", def: "Teknologi som er designet for å redusere miljøpåvirkning og ressursbruk." },
      { term: "Nanoteknologi", def: "Teknologi som opererer på atomær eller molekylær skala (1-100 nanometer)." },
      { term: "Automatisering", def: "Bruk av maskiner eller teknologi til å utføre oppgaver som tidligere krevde menneskelig innsats." },
    ],
    quiz: [
      { q: "Hva er en algoritme?", opts: ["En type datamaskin", "Trinnvise instruksjoner for å løse et problem", "Et programmeringsspråk", "En matematisk formel"], ans: 1 },
      { q: "Hva studerer bioteknologi?", opts: ["Bare planter", "Bare dyr", "Bruk av levende organismer til produkter/løsninger", "Kun menneskelig DNA"], ans: 2 },
      { q: "Hva er nanoteknologi?", opts: ["Teknologi for romfart", "Teknologi på atomær/molekylær skala", "Undervannsteknologi", "Medisinsk utstyr"], ans: 1 },
      { q: "Hva betyr automatisering?", opts: ["Manuelt arbeid", "Maskiner utfører oppgaver", "Datalagring", "Internett"], ans: 1 },
      { q: "Hva er kjennetegnet på bærekraftig teknologi?", opts: ["Høy produksjon", "Rask prosessering", "Redusert miljøpåvirkning", "Lav pris"], ans: 2 },
    ],
    experiments: [
      { title: "Elektrisitetskrets", desc: "Bygg en enkel lyskrets med batteri, ledninger og lyspære. Eksperimenter med serie- og parallellkobling.", materials: ["Batteri (4,5V)", "Ledninger med klyper", "Lyspære", "Bryter"] },
    ],
    tasks: [
      { q: "Forklar hva bioteknologi er og gi ett eksempel på hvordan det brukes i medisin." },
      { q: "Hva er fordeler og ulemper med automatisering i arbeidslivet?" },
    ],
  },
  {
    id: "kropp", title: "Kropp og helse", icon: "🫀", color: "from-rose-500 to-pink-600", bg: "bg-rose-50", border: "border-rose-300", accent: "bg-rose-500",
    terms: [
      { term: "Celle", def: "Den grunnleggende byggesteinen i alle levende organismer." },
      { term: "DNA", def: "Deoksyribonukleinsyre – molekylet som inneholder genetisk informasjon i cellene." },
      { term: "Hormoner", def: "Kjemiske budbringere produsert av kjertelorganer som regulerer kroppens funksjoner." },
      { term: "Immunsystem", def: "Kroppens forsvarssystem mot sykdom og fremmede organismer." },
      { term: "Nervesystem", def: "Nettverket av nerver og celler som sender signaler mellom ulike deler av kroppen." },
      { term: "Metabolisme", def: "Alle de kjemiske prosessene i kroppen som opprettholder liv." },
    ],
    quiz: [
      { q: "Hva er den grunnleggende byggesteinen i levende organismer?", opts: ["Atom", "Molekyl", "Celle", "Gen"], ans: 2 },
      { q: "Hva inneholder DNA?", opts: ["Hormoner", "Genetisk informasjon", "Vitaminer", "Blodceller"], ans: 1 },
      { q: "Hva er immunsystemets funksjon?", opts: ["Fordøye mat", "Transportere oksygen", "Forsvare mot sykdom", "Regulere temperatur"], ans: 2 },
      { q: "Hva produserer hormoner?", opts: ["Muskler", "Bein", "Kjertelorganer", "Blodceller"], ans: 2 },
      { q: "Hva er metabolisme?", opts: ["Bare fordøyelse", "Alle kjemiske prosesser som opprettholder liv", "Bare respirasjon", "Muskelarbeid"], ans: 1 },
    ],
    experiments: [
      { title: "Mål puls og respirasjon", desc: "Mål hvilepuls, puls under aktivitet og etter hvile. Lag grafer av resultatet.", materials: ["Stoppeklokke", "Notatbok"] },
      { title: "DNA-ekstraksjon fra jordbær", desc: "Mos jordbær, tilsett salt, oppvaskmiddel og iskaldt sprit. Trekk ut DNA med en tannpirker.", materials: ["Jordbær", "Salt", "Oppvaskmiddel", "Iskaldt etanol/sprit", "Sil", "Glass"] },
    ],
    tasks: [
      { q: "Forklar hva DNA er og hvilken rolle det spiller i arv." },
      { q: "Beskriv immunsystemets to forsvarslinjer mot sykdom." },
    ],
  },
  {
    id: "energi", title: "Energi og krefter", icon: "⚡", color: "from-amber-500 to-orange-600", bg: "bg-amber-50", border: "border-amber-300", accent: "bg-amber-500",
    terms: [
      { term: "Kinetisk energi", def: "Energi et objekt har på grunn av bevegelse. E = ½mv²" },
      { term: "Potensiell energi", def: "Lagret energi et objekt har på grunn av posisjon eller tilstand." },
      { term: "Newtons lover", def: "Tre grunnleggende lover som beskriver bevegelse og krefter: treghet, F=ma, og aksjon/reaksjon." },
      { term: "Gravitasjon", def: "Tiltrekkingskraft mellom masser. Jordens gravitasjon gir oss tyngdekraft." },
      { term: "Friksjon", def: "Motstanden som oppstår når to overflater er i kontakt og beveger seg mot hverandre." },
      { term: "Energioverføring", def: "Prosessen der energi flyttes fra ett objekt/form til et annet." },
    ],
    quiz: [
      { q: "Hva er kinetisk energi?", opts: ["Lagret energi", "Energi fra bevegelse", "Varmeenergi", "Kjemisk energi"], ans: 1 },
      { q: "Hva sier Newtons 1. lov?", opts: ["F = ma", "Et legeme i ro forblir i ro med mindre en kraft virker", "Til enhver kraft er det en motkraft", "Energi kan ikke skapes"], ans: 1 },
      { q: "Hva er gravitasjon?", opts: ["Elektrisk kraft", "Tiltrekkingskraft mellom masser", "Magnetisk kraft", "Friksjon"], ans: 1 },
      { q: "Hvilken enhet måles kraft i?", opts: ["Joule", "Watt", "Newton", "Pascal"], ans: 2 },
      { q: "Hva er friksjon?", opts: ["Tyngdekraft", "Motstanden når overflater gnir mot hverandre", "Luftmotstand alene", "Elektrisk ladning"], ans: 1 },
    ],
    experiments: [
      { title: "Kraftmåler og friksjon", desc: "Dra en gjenstand over ulike overflater og mål kraften.", materials: ["Kraftmåler (newtonmeter)", "Bok", "Ulike underlag"] },
      { title: "Pendelforsøk", desc: "Undersøk hvordan lengden på snoren påvirker svingetiden.", materials: ["Snor", "Lodd", "Stoppeklokke", "Linjal"] },
    ],
    tasks: [
      { q: "Forklar Newtons tre bevegelseslover med egne ord og gi et eksempel på hver." },
      { q: "Hva er forskjellen på kinetisk og potensiell energi? Beskriv en situasjon der energi overføres mellom de to." },
    ],
  },
];

function calcGrade(pct: number) {
  if (pct > 95) return 6;
  if (pct >= 80) return 5;
  if (pct >= 60) return 4;
  if (pct >= 40) return 3;
  if (pct >= 20) return 2;
  return 1;
}

function ProgressBar({ value, max, white }: { value: number; max: number; white?: boolean }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className={`w-full rounded-full h-2 ${white ? "bg-white/30" : "bg-gray-200"}`}>
      <div className={`h-2 rounded-full transition-all ${white ? "bg-white" : "bg-current"}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

type Mod = typeof modules[0];

function FlashcardSection({ mod }: { mod: Mod }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = mod.terms[idx];
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Faguttrykk – Flashcards</h3>
      <p className="text-sm text-gray-500 mb-4">{idx + 1} / {mod.terms.length}</p>
      <div className={`cursor-pointer rounded-2xl p-8 text-center shadow-md border-2 transition-all select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:scale-95 ${mod.border} ${mod.bg} min-h-[140px] flex items-center justify-center`} onClick={() => setFlipped(f => !f)} onTouchEnd={(e) => (e.currentTarget as HTMLDivElement).blur?.()}>
        {!flipped ? <span className="text-2xl font-bold">{card.term}</span> : <span className="text-base text-gray-700">{card.def}</span>}
      </div>
      <p className="text-xs text-center text-gray-400 mt-2">Trykk for å snu kortet</p>
      <div className="flex gap-3 mt-4 justify-center">
        <button className="px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-medium transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:scale-95" onClick={() => { setIdx(i => (i - 1 + mod.terms.length) % mod.terms.length); setFlipped(false); }} onTouchEnd={(e) => e.currentTarget.blur()}>← Forrige</button>
        <button className="px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-medium transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:scale-95" onClick={() => { setIdx(i => (i + 1) % mod.terms.length); setFlipped(false); }} onTouchEnd={(e) => e.currentTarget.blur()}>Neste →</button>
      </div>
    </div>
  );
}

function QuizSection({ mod, onComplete }: { mod: Mod; onComplete?: (pct: number) => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showGrade, setShowGrade] = useState(true);
  const correct = mod.quiz.filter((q, i) => answers[i] === q.ans).length;
  const pct = Math.round((correct / mod.quiz.length) * 100);
  const grade = calcGrade(pct);
  if (submitted) return (
    <div>
      <h3 className="font-bold text-lg mb-4">Resultat</h3>
      <div className={`rounded-2xl p-6 ${mod.bg} border ${mod.border} mb-4`}>
        <p className="text-3xl font-bold text-center mb-1">{correct} / {mod.quiz.length}</p>
        <p className="text-center text-gray-600 mb-3">{pct}% riktige</p>
        {showGrade && <div className="mt-4 text-center"><span className="text-5xl font-black">{grade}</span><span className="text-gray-500 ml-2">/ 6</span></div>}
        <div className="flex justify-center mt-3"><button className="text-sm underline text-gray-500 transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:opacity-70" onClick={() => setShowGrade(g => !g)} onTouchEnd={(e) => e.currentTarget.blur()}>{showGrade ? "Skjul karakter" : "Vis karakter"}</button></div>
      </div>
      <h4 className="font-semibold mb-3">Fasit</h4>
      {mod.quiz.map((q, i) => (
        <div key={i} className={`mb-3 p-3 rounded-xl border ${answers[i] === q.ans ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
          <p className="font-medium text-sm mb-1">{i + 1}. {q.q}</p>
          <p className="text-sm">Ditt svar: <span className={answers[i] === q.ans ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}>{q.opts[answers[i]] ?? "–"}</span></p>
          {answers[i] !== q.ans && <p className="text-sm text-green-700">✓ Riktig: {q.opts[q.ans]}</p>}
        </div>
      ))}
      <button className={`mt-3 w-full py-3 rounded-xl text-white font-semibold transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:scale-95 ${mod.accent}`} onClick={() => { setAnswers({}); setSubmitted(false); }} onTouchEnd={(e) => e.currentTarget.blur()}>Ta quizen på nytt</button>
    </div>
  );
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Quiz</h3>
      {mod.quiz.map((q, i) => (
        <div key={i} className="mb-5">
          <p className="font-medium mb-2">{i + 1}. {q.q}</p>
          <div className="grid grid-cols-1 gap-2">
            {q.opts.map((opt, j) => (
              <button key={j} className={`text-left px-4 py-3 rounded-xl border text-sm transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${answers[i] === j ? `${mod.bg} ${mod.border} font-semibold focus:ring-current` : "bg-white border-gray-200 hover:border-gray-400 active:border-gray-300 focus:ring-gray-300"}`} onClick={() => setAnswers(a => ({ ...a, [i]: j }))} onTouchEnd={(e) => e.currentTarget.blur()}>{opt}</button>
            ))}
          </div>
        </div>
      ))}
      <button className={`w-full py-3 rounded-xl text-white font-bold transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:scale-95 ${Object.keys(answers).length < mod.quiz.length ? "bg-gray-300 cursor-not-allowed active:scale-100" : mod.accent}`} disabled={Object.keys(answers).length < mod.quiz.length} onClick={() => { setSubmitted(true); onComplete?.(pct); }} onTouchEnd={(e) => !e.currentTarget.disabled && e.currentTarget.blur()}>
        {Object.keys(answers).length < mod.quiz.length ? `Svar på alle (${Object.keys(answers).length}/${mod.quiz.length})` : "Lever quiz"}
      </button>
    </div>
  );
}

function ExperimentsSection({ mod }: { mod: Mod }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Praktiske forsøk</h3>
      {mod.experiments.map((exp, i) => (
        <div key={i} className={`mb-3 border rounded-xl overflow-hidden ${mod.border}`}>
          <button className={`w-full text-left px-4 py-3 font-semibold flex justify-between items-center transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:opacity-80 ${mod.bg}`} onClick={() => setOpen(open === i ? null : i)} onTouchEnd={(e) => e.currentTarget.blur()}>
            <span>🔬 {exp.title}</span><span>{open === i ? "▲" : "▼"}</span>
          </button>
          {open === i && <div className="px-4 py-3 bg-white"><p className="text-sm text-gray-700 mb-3">{exp.desc}</p><p className="text-xs font-bold uppercase text-gray-500 mb-1">Utstyr:</p><ul className="list-disc list-inside text-sm text-gray-600">{exp.materials.map((m, j) => <li key={j}>{m}</li>)}</ul></div>}
        </div>
      ))}
    </div>
  );
}

function TasksSection({ mod }: { mod: Mod }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [saved, setSaved] = useState<Record<number, boolean>>({});
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Øvingsoppgaver</h3>
      {mod.tasks.map((t, i) => (
        <div key={i} className={`mb-4 p-4 rounded-xl border ${mod.border} ${mod.bg}`}>
          <p className="font-medium text-sm mb-3">{i + 1}. {t.q}</p>
          <textarea className="w-full border border-gray-300 rounded-lg p-2 text-sm min-h-[80px] resize-y" placeholder="Skriv svaret ditt her..." value={answers[i] || ""} onChange={e => setAnswers(a => ({ ...a, [i]: e.target.value }))} />
          <button className={`mt-2 text-sm px-3 py-2 rounded-lg text-white transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:scale-95 ${mod.accent}`} onClick={() => setSaved(s => ({ ...s, [i]: true }))} onTouchEnd={(e) => e.currentTarget.blur()}>Lagre svar</button>
          {saved[i] && <p className="text-xs text-green-600 mt-1">✓ Lagret!</p>}
        </div>
      ))}
    </div>
  );
}

function ModulePage({ mod, progress, onProgress, onBack }: { mod: Mod; progress: number; onProgress: (id: string, pct: number) => void; onBack: () => void }) {
  const tabs = ["Flashcards", "Quiz", "Forsøk", "Oppgaver"];
  const [tab, setTab] = useState(0);
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <button className="text-sm text-gray-500 mb-4 transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:opacity-70" onClick={onBack} onTouchEnd={(e) => e.currentTarget.blur()}>← Tilbake</button>
      <div className={`rounded-2xl p-5 text-white bg-gradient-to-br ${mod.color} mb-5`}>
        <div className="text-4xl mb-1">{mod.icon}</div>
        <h2 className="text-2xl font-bold">{mod.title}</h2>
        <div className="mt-3"><ProgressBar value={progress} max={100} white /><p className="text-xs opacity-70 mt-1">{progress}% fullført</p></div>
      </div>
      <div className="flex gap-2 mb-5 overflow-x-auto">
        {tabs.map((t, i) => <button key={i} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:scale-95 ${tab === i ? `${mod.accent} text-white focus:ring-opacity-50` : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`} onClick={() => setTab(i)} onTouchEnd={(e) => e.currentTarget.blur()}>{t}</button>)}
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        {tab === 0 && <FlashcardSection mod={mod} />}
        {tab === 1 && <QuizSection mod={mod} onComplete={pct => onProgress(mod.id, pct)} />}
        {tab === 2 && <ExperimentsSection mod={mod} />}
        {tab === 3 && <TasksSection mod={mod} />}
      </div>
    </div>
  );
}

function Dashboard({ progress, onSelect }: { progress: Record<string, number>; onSelect: (id: string) => void }) {
  const avg = Math.round(modules.reduce((s, m) => s + (progress[m.id] || 0), 0) / modules.length);
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-black text-gray-800">📚 Naturfag</h1>
      <p className="text-gray-500 text-sm">Eksamensforberedelse – 10. trinn LK20</p>
      <div className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white mb-6">
        <p className="text-sm opacity-80">Total fremgang</p>
        <p className="text-3xl font-black">{avg}%</p>
        <ProgressBar value={avg} max={100} white />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {modules.map(mod => {
          const p = progress[mod.id] || 0;
          return (
            <button key={mod.id} className={`text-left rounded-2xl p-4 bg-gradient-to-br ${mod.color} text-white shadow-md hover:scale-105 transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 active:scale-95`} onClick={() => onSelect(mod.id)} onTouchEnd={(e) => e.currentTarget.blur()}>
              <div className="text-3xl mb-2">{mod.icon}</div>
              <p className="font-bold text-sm">{mod.title}</p>
              <div className="mt-2"><ProgressBar value={p} max={100} white /><p className="text-xs opacity-70 mt-1">{p}%</p></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const [view, setView] = useState("dashboard");
  const [progress, setProgress] = useState<Record<string, number>>({});
  const handleProgress = (id: string, pct: number) => setProgress(p => ({ ...p, [id]: Math.max(p[id] || 0, pct) }));
  const mod = modules.find(m => m.id === view);
  if (mod) return <div className="min-h-screen bg-gray-50"><ModulePage mod={mod} progress={progress[mod.id] || 0} onProgress={handleProgress} onBack={() => setView("dashboard")} /></div>;
  return <div className="min-h-screen bg-gray-50"><Dashboard progress={progress} onSelect={setView} /></div>;
}
