<script lang="ts">
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { expenses } from '../../stores/expenses';

  const deleteItem = (id) => {
    expenses.update((PrevValues) => {
      let newValues = [...PrevValues];
      newValues = newValues.filter((item) => item.id !== id);
      return newValues;
    });
  };
</script>

<div class="container">
  <div class="title">
    <h3>Expenses/Income Details</h3>
  </div>
  <div class="details">
    <div class="details__body">
      {#each $expenses as item (item.id)}
        <div
          class="item-container"
          class:exp={item.type === 'exp'}
          in:scale={{ duration: 1000 }}
          animate:flip={{ duration: 1000 }}
        >
          <div class="details-item">
            <div class="details-item__title">{item.title}</div>
            <div class="details-item__amount">{item.amount}</div>
          </div>
          <div class="details-controls" on:click={() => deleteItem(item.id)}>
            <i class="fas fa-times" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    border-left: 1px solid black;
    position: relative;
    width: 450px;
    height: 100%;
    padding-top: 40px;
  }

  .details {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }

  .title {
    font-size: 20px;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  .item-container {
    border: 4px solid var(--inc-color);
    background-color: var(--text-color);
    border-radius: 10px;
    margin: 20px 0;
    padding: 10px;
    font-size: 18px;
    display: flex;
    width: 100%;
  }

  .details-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 12;
  }

  .details-controls {
    flex: 1;
    /* float: right;
    content: ''; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    cursor: pointer;
    text-align: right;
  }

  .exp {
    border: 4px solid var(--exp-color);
  }

  @media (max-width: 1200px) {
    .container {
      width: 100%;
      max-width: 600px;
      margin-top: 0;
      padding-top: 0;
      height: 400px;
      padding-top: 10px;
      border-left: none;
    }
    .details {
      height: 200px;
      overflow-y: scroll;
    }
    .title {
      font-size: 16px;
    }
  }
</style>
