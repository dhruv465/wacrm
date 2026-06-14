import { describe, expect, it } from 'vitest';
import { resolveTemplateStatusDisplay } from './template-status';

describe('resolveTemplateStatusDisplay', () => {
  it('handles legacy TitleCase template statuses', () => {
    expect(resolveTemplateStatusDisplay('Approved')).toMatchObject({
      key: 'APPROVED',
      label: 'Approved',
    });
  });

  it('falls back to draft display for unknown statuses', () => {
    expect(resolveTemplateStatusDisplay('UNKNOWN_META_STATUS')).toMatchObject({
      key: 'DRAFT',
      label: 'Draft',
    });
  });
});
