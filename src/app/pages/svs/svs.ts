import { Component, computed } from '@angular/core';
import { selectedLanguagePack } from '../../core/utils/language-pack';

type TaskStatus = 'yes' | 'no' | 'opt';

interface ScheduleItemData {
  taskKey: string;
  icon: string;
  d1: TaskStatus;
  d2: TaskStatus;
  d3: TaskStatus;
  d4: TaskStatus;
  d5: TaskStatus;
}

@Component({
  selector: 'app-svs',
  imports: [],
  templateUrl: './svs.html',
  styleUrl: './svs.css',
})
export class Svs {
  public pack = selectedLanguagePack;

  private scheduleData: ScheduleItemData[] = [
    { taskKey: 'fc',           icon: '/items/fc.png',                         d1: 'yes', d2: 'no',  d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'construction', icon: '/items/fire_crystal_building.png',        d1: 'yes', d2: 'yes', d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'research',     icon: '/items/steel.png',                        d1: 'yes', d2: 'yes', d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'sigils',       icon: '/items/common_expert_sigil.png',          d1: 'no',  d2: 'yes', d3: 'no',  d4: 'no',  d5: 'no'  },
    { taskKey: 'fcShards',     icon: '/items/fc_shards.png',                    d1: 'yes', d2: 'yes', d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'gather',       icon: '/items/wood.png',                         d1: 'no',  d2: 'yes', d3: 'no',  d4: 'no',  d5: 'no'  },
    { taskKey: 'wheel',        icon: '/events/lucky_wheel.png',                 d1: 'no',  d2: 'yes', d3: 'opt', d4: 'no',  d5: 'no'  },
    { taskKey: 'heroShards',   icon: '/items/mythic_general_hero_shard.png',    d1: 'no',  d2: 'yes', d3: 'opt', d4: 'no',  d5: 'no'  },
    { taskKey: 'beasts',       icon: '/items/chief_stamina.png',                d1: 'no',  d2: 'no',  d3: 'yes', d4: 'no',  d5: 'no'  },
    { taskKey: 'troops',       icon: '/items/training_capacity_enhance.png',    d1: 'no',  d2: 'no',  d3: 'no',  d4: 'yes', d5: 'no'  },
    { taskKey: 'charms',       icon: '/items/charm_design.png',                 d1: 'yes', d2: 'no',  d3: 'no',  d4: 'yes', d5: 'no'  },
    { taskKey: 'widgets',      icon: '/items/essence_stone.png',                d1: 'no',  d2: 'no',  d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'heroGears',    icon: '/items/mythril.png',                      d1: 'no',  d2: 'no',  d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'chiefGear',    icon: '/items/design_plan.png',                  d1: 'no',  d2: 'no',  d3: 'no',  d4: 'no',  d5: 'yes' },
    { taskKey: 'pets',         icon: '/items/strengthening_serum.png',          d1: 'no',  d2: 'no',  d3: 'opt', d4: 'no',  d5: 'yes' },
  ];

  public schedule = computed(() => {
    const tasks = this.pack().svs.matrix.tasks as Record<string, string>;
    return this.scheduleData.map(item => ({
      ...item,
      taskName: tasks[item.taskKey]
    }));
  });
}