# Aalam Project Tracker: v1.0 Content Roadmap

This document serves as the central dashboard for tracking the development of the "Museum of Infinite Connections" first release content.

## Status Legend
| Symbol | Status |
| :---: | :--- |
| 🔴 | **Todo** (Not Started) |
| 🟡 | **In Progress** |
| 🟢 | **Done** (Verified) |
| 🔵 | **Maintenance** (Live & Iterating) |

---

## 🚀 Journey Development Tracker

| Journey Name | Research | Design | Implementation | Mobile UX | Testing | Deployed |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1. Cosmic Origins** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |
| **2. Evolution of Life** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |
| **3. Rise of Civilizations** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |
| **4. Evolution of Tech** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |
| **5. History of Art** | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 | 🔴 |

## 🏗️ Infrastructure & DevOps
This section tracks the operational side of the project, including version control and deployments to `aalam.xyz`.

| Component | Status | Git State | Staging (Local) | Production (`aalam.xyz`) |
| :--- | :---: | :---: | :---: | :---: |
| **Core Engine** | 🟢 | Clean | ✅ Verified | 🟡 Pending |
| **Mobile Views** | 🟡 | WIP | 🟡 Testing | 🔴 Not Deployed |
| **Assets/Media** | 🟢 | Managed | ✅ Verified | 🟡 Optimizing |

### Deployment Checklist
- [ ] **GitHub**: Ensure `main` branch is protected and CI/CD (GitHub Actions) is configured.
- [ ] **Mobile UX Audit**: Verify touch targets and layout on <375px screens.
- [ ] **Build Optimization**: Run `npm run build` and check bundle size.
- [ ] **Deploy**: Push to `gh-pages` or host.
- [ ] **Smoke Test**: Verify `aalam.xyz` loads without console errors.

---

## 📝 Detailed Task Boards

### 1. Cosmic Origins
- [ ] **Research**: Gather precise dates for Big Bang, Reionization, Solar System formation.
- [ ] **Design**: Define visual style (Dark void, bright stars).
- [ ] **Implementation**: Add events to `allEvents.ts` and journey to `journeys.ts`.
- [ ] **Simulation Feedback**: Roleplay as user -> Critique -> Refine.
- [ ] **Testing**: Verify "billions of years" scale rendering.

### 2. The Vital Spark: Evolution of Life
- [ ] **Research**: Key mass extinctions and evolutionary leaps.
- [ ] **Design**: Color palette: Organic Greens and Blues.
- [ ] **Implementation**: Add biological milestones.
- [ ] **Testing**: Check "millions of years" scale.

### 3. The Human Story: Rise of Civilizations
- [ ] **Research**: Compare timeline of East vs. West civilizations.
- [ ] **Design**: Focus on architectural iconography.
- [ ] **Implementation**: Populate historical data.
- [ ] **Testing**: Verify historical density does not clutter UI.

### 4. Wires & Waves: Evolution of Technology
- [ ] **Research**: Industrial revolution to Digital age.
- [ ] **Design**: Mechanical to Digital visual transition.
- [ ] **Implementation**: Integrate with existing communication events.
- [ ] **Testing**: Ensure smooth scroll through rapid modern changes.

### 5. The Canvas of Time: History of Art
- [ ] **Research**: Major art movements (Renaissance, Impressionism, etc.).
- [ ] **Design**: Use actual art pieces as primary visuals.
- [ ] **Implementation**: High-res image optimization.
- [ ] **Testing**: Verify image rendering quality.

---

## 🛠 System Maintenance & Tech Debt
- [ ] **Performance**: Evaluate rendering performance with >500 events.
- [ ] **Mobile**: Polish mobile touch interactions for complex journeys.
- [ ] **Accessibility**: Add ARIA labels to all new journey elements.
