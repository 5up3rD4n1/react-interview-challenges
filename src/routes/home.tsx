export default function Home() {
  return (
    <>
      <main>
        <h1>Challenges</h1>
        <nav>
          <ul>
            <li>
              <a href={'/calendar'}>Calendar</a>
            </li>
            <li>
              <a href={'/counter'}>Counter</a>
            </li>
            <li>
              <a href={'/slots-machine'}>SlotsMachine</a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
