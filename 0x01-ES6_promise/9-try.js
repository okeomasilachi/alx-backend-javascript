export default function guardrail(mathFunction) {
  const ret = [];

  try {
    ret.push(mathFunction());
  } catch (err) {
    ret.push(String(err));
  } finally {
    ret.push('Guardrail was processed');
  }

  return ret;
}